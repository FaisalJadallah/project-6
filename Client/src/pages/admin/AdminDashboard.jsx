import React, { useState } from "react";
import {
  Bell,
  Search,
  BarChart2,
  Folder,
  Users,
  DollarSign,
  Calendar,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  Activity,
  Filter,
} from "lucide-react";
import SideNav from "../../components/admin/SideNav";

const AdminDashboard = () => {
  const [dateRange, setDateRange] = useState("الشهر الحالي");

  // Sample data for charts
  const projectStatusData = [
    { status: "مكتمل", count: 12 },
    { status: "قيد التنفيذ", count: 8 },
    { status: "معلق", count: 3 },
    { status: "جديد", count: 5 },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800 overflow-hidden rtl">
      {/* SideNav Component */}
      <SideNav />

      {/* Main Content Area - adjusted for sidebar */}
      <div className="flex-1 flex flex-col mr-[80px] md:mr-64 transition-all duration-300">
        {/* Top Navigation */}
       

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {/* Dashboard Header with Date Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">لوحة التحكم</h1>
              <p className="text-gray-500 text-sm">
                مرحباً بك، أحمد! هذه نظرة عامة على آخر التحديثات
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{dateRange}</span>
                  <ChevronDown size={16} />
                </button>
                {/* Date range dropdown could be added here */}
              </div>
           
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            <StatCard
              title="إجمالي التبرعات"
              value="$10,250"
              change="+12.5%"
              isPositive={true}
              icon={<DollarSign size={20} />}
              color="blue"
            />

            <StatCard
              title="عدد المشاريع"
              value="28"
              change="+3"
              isPositive={true}
              icon={<Folder size={20} />}
              color="green"
            />

            <StatCard
              title="عدد المستخدمين"
              value="164"
              change="+14"
              isPositive={true}
              icon={<Users size={20} />}
              color="purple"
            />

            <StatCard
              title="معدل الإنجاز"
              value="78%"
              change="+3%"
              isPositive={true}
              icon={<BarChart2 size={20} />}
              color="amber"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Projects Overview */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow">
              <div className="px-4 md:px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium">المشاريع الأخيرة</h3>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded text-gray-500 hover:bg-gray-100">
                    <Filter size={16} />
                  </button>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    عرض الكل
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 text-right">
                    <tr>
                      <th className="px-4 md:px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        اسم المشروع
                      </th>
                      <th className="px-4 md:px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th className="px-4 md:px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الميزانية
                      </th>
                      <th className="px-4 md:px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        نسبة الإنجاز
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">
                            <Folder size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              إغاثة الشتاء
                            </div>
                            <div className="text-xs text-gray-500">
                              تم البدء: 12/01/2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          مكتمل
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $2,500
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-green-600 h-2.5 rounded-full"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">100%</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mr-3">
                            <Folder size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              بناء مدرسة
                            </div>
                            <div className="text-xs text-gray-500">
                              تم البدء: 05/02/2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          قيد التنفيذ
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $5,000
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-yellow-500 h-2.5 rounded-full"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">65%</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                            <Folder size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              حفر آبار
                            </div>
                            <div className="text-xs text-gray-500">
                              تم البدء: 20/02/2024
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          جديد
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $1,200
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: "10%" }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">10%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 md:px-6 py-3 border-t border-gray-200 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <ChevronRight size={20} />
                  </button>
                  <button className="w-8 h-8 bg-blue-600 rounded-lg text-white">
                    1
                  </button>
                  <button className="w-8 h-8 hover:bg-gray-100 rounded-lg">
                    2
                  </button>
                  <button className="w-8 h-8 hover:bg-gray-100 rounded-lg">
                    3
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <ChevronLeft size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Project Status & Activity */}
            <div className="flex flex-col gap-6">
              {/* Project Status */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6">
                <h3 className="text-lg font-medium mb-4">حالة المشاريع</h3>
                <div className="space-y-4">
                  {projectStatusData.map((item) => (
                    <div key={item.status}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">
                          {item.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.count} مشاريع
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.status === "مكتمل"
                              ? "bg-green-500"
                              : item.status === "قيد التنفيذ"
                              ? "bg-yellow-500"
                              : item.status === "معلق"
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }`}
                          style={{ width: `${(item.count / 28) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow p-4 md:p-6 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">آخر النشاطات</h3>
                  <button className="text-blue-600 text-sm hover:underline">
                    عرض الكل
                  </button>
                </div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute top-0 bottom-0 right-4 w-0.5 bg-gray-200"></div>

                  {/* Timeline items */}
                  <div className="space-y-6">
                    <div className="relative flex pr-8">
                      <div className="absolute right-0 mt-1 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center z-10">
                        <DollarSign size={16} className="text-blue-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium">
                          تم التبرع بمبلغ $500
                        </h4>
                        <p className="text-xs text-gray-500">
                          لمشروع إغاثة الشتاء
                        </p>
                        <p className="text-xs text-gray-400 mt-1">منذ ساعتين</p>
                      </div>
                    </div>

                    <div className="relative flex pr-8">
                      <div className="absolute right-0 mt-1 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center z-10">
                        <Folder size={16} className="text-green-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium">
                          تم إضافة مشروع جديد
                        </h4>
                        <p className="text-xs text-gray-500">مشروع حفر آبار</p>
                        <p className="text-xs text-gray-400 mt-1">
                          اليوم 10:30 ص
                        </p>
                      </div>
                    </div>

                    <div className="relative flex pr-8">
                      <div className="absolute right-0 mt-1 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center z-10">
                        <Users size={16} className="text-purple-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium">
                          انضمام مستخدم جديد
                        </h4>
                        <p className="text-xs text-gray-500">أحمد محمد</p>
                        <p className="text-xs text-gray-400 mt-1">أمس 2:15 م</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </main>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, isPositive, icon, color }) => {
  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    amber: { bg: "bg-amber-100", text: "text-amber-600" },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-xl md:text-2xl font-bold mt-1">{value}</h3>
          <div
            className={`flex items-center mt-1 text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <ArrowUp size={16} className="mr-1" />
            ) : (
              <ArrowDown size={16} className="mr-1" />
            )}
            <span>{change}</span>
          </div>
        </div>
        <div
          className={`w-12 h-12 rounded-lg ${colorClasses[color].bg} flex items-center justify-center ${colorClasses[color].text}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

// Donation Card Component
const DonationCard = ({ name, amount, project, date, trend }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex justify-between items-start">
        <div className="flex items-start">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
            <span className="text-sm font-bold">{name.charAt(0)}</span>
          </div>
          <div>
            <h4 className="text-sm font-medium">{name}</h4>
            <p className="text-xs text-gray-500">{project}</p>
            <p className="text-xs text-gray-400 mt-1">{date}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-800">{amount}</span>
          <div
            className={`flex items-center mt-1 text-xs ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend === "up" ? (
              <ArrowUp size={12} className="mr-1" />
            ) : (
              <ArrowDown size={12} className="mr-1" />
            )}
            <span>{trend === "up" ? "+8%" : "-3%"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ChevronDown component for dropdown
const ChevronDown = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default AdminDashboard;
