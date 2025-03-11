import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CheckCircle,
  XCircle,
  User,
  Mail,
  Shield,
  Clock,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Detect sidebar state from parent component
  useEffect(() => {
    // Check if sidebar is collapsed by looking for the w-20 class
    const sideNavElement = document.querySelector('[class*="w-20"]');
    setSidebarCollapsed(!!sideNavElement);

    // Add event listener for sidebar changes (optional)
    const observer = new MutationObserver(() => {
      const sideNavElement = document.querySelector('[class*="w-20"]');
      setSidebarCollapsed(!!sideNavElement);
    });

    const sideNav = document.querySelector('[class*="from-gray-900"]');
    if (sideNav) {
      observer.observe(sideNav, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => observer.disconnect();
  }, []);

  // Fetch all users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/api/users");
      setUsers(response.data);
      setError(null);
    } catch (error) {
      console.error("❌ خطأ في جلب المستخدمين:", error);
      setError("فشل في تحميل بيانات المستخدمين");
    } finally {
      setLoading(false);
    }
  };

  // Function to update user status
  const updateUserStatus = async (userId, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/users/${userId}/approve`, {
        status: newStatus,
      });
      // Refresh the user list after updating status
      fetchUsers();

      // Show notification
      showNotification(
        `تم تحديث حالة المستخدم إلى ${
          newStatus === "approved" ? "معتمد" : "قيد الانتظار"
        }`,
        "success"
      );
    } catch (error) {
      console.error("❌ خطأ في تحديث حالة المستخدم:", error);
      showNotification("فشل تحديث حالة المستخدم", "error");
    }
  };

  // Simple notification function (placeholder)
  const showNotification = (message, type) => {
    alert(message);
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get status badge styling
  const getStatusBadge = (status) => {
    if (status === "approved") {
      return {
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        icon: <CheckCircle className="w-4 h-4 mr-1" />,
        label: "معتمد",
      };
    } else {
      return {
        bgColor: "bg-amber-100",
        textColor: "text-amber-800",
        icon: <Clock className="w-4 h-4 mr-1" />,
        label: "قيد الانتظار",
      };
    }
  };

  return (
    <div
      className={`bg-gray-50 min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? "mr-20" : "mr-64"
      }`}
    >
      <div className="p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <User className="ml-2 text-indigo-600" />
              <span>إدارة المستخدمين</span>
            </h1>
            <p className="mt-1 text-gray-600">
              إدارة المستخدمين والأذونات في النظام
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-3 rtl:space-x-reverse">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-right"
                placeholder="بحث..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              onClick={fetchUsers}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition duration-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              تحديث
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-3 rounded-full">
                <User className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="mr-4">
                <p className="text-gray-500 text-sm">إجمالي المستخدمين</p>
                <h3 className="text-2xl font-bold">{users.length}</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="mr-4">
                <p className="text-gray-500 text-sm">المستخدمين المعتمدين</p>
                <h3 className="text-2xl font-bold">
                  {users.filter((user) => user.status === "approved").length}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div className="mr-4">
                <p className="text-gray-500 text-sm">بانتظار الموافقة</p>
                <h3 className="text-2xl font-bold">
                  {users.filter((user) => user.status === "pending").length}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="mr-4">
                <p className="text-gray-500 text-sm">المشرفين</p>
                <h3 className="text-2xl font-bold">
                  {users.filter((user) => user.role === "admin").length}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          {/* Card Header */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              👤 قائمة المستخدمين
            </h2>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="text-sm text-gray-500">
                {filteredUsers.length} من {users.length} مستخدم
              </div>

              <button className="p-2 hover:bg-gray-200 rounded-lg">
                <Filter className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="p-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-red-100 text-red-800">
                <XCircle className="w-5 h-5 ml-2" />
                {error}
              </div>
            </div>
          )}

          {/* Table Section */}
          {!loading && !error && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الاسم
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      البريد الإلكتروني
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الدور
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الحالة
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        {searchTerm
                          ? "لم يتم العثور على نتائج للبحث"
                          : "لا يوجد مستخدمين للعرض"}
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => {
                      const { bgColor, textColor, icon, label } =
                        getStatusBadge(user.status);
                      return (
                        <tr
                          key={user.id}
                          className="hover:bg-gray-50 transition duration-150"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <div className="flex items-center justify-end">
                              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                <span className="text-indigo-800 font-semibold">
                                  {user.firstName.charAt(0)}
                                  {user.lastName.charAt(0)}
                                </span>
                              </div>
                              <div className="mr-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.firstName} {user.lastName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <div className="flex items-center justify-end">
                              <Mail className="w-4 h-4 text-gray-400 ml-2" />
                              <span className="text-gray-800 text-sm">
                                {user.email}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <div className="flex items-center justify-end">
                              <Shield className="w-4 h-4 text-gray-400 ml-2" />
                              <span className="text-gray-800 text-sm">
                                {user.role}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <span
                              className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${bgColor} ${textColor}`}
                            >
                              {icon}
                              {label}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            {user.status === "pending" ? (
                              <button
                                onClick={() =>
                                  updateUserStatus(user.id, "approved")
                                }
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 flex items-center text-sm"
                              >
                                <CheckCircle className="w-4 h-4 ml-1" />
                                الموافقة
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  updateUserStatus(user.id, "pending")
                                }
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200 flex items-center text-sm"
                              >
                                <Clock className="w-4 h-4 ml-1" />
                                تعليق
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Card Footer with Pagination */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <div className="text-gray-500 text-sm">
              عرض {filteredUsers.length} من أصل {users.length} مستخدم
            </div>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600 disabled:opacity-50">
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="px-3 py-1 bg-indigo-600 text-white rounded-md">
                1
              </span>
              <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600">
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
