import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/api/admin/donations")
      .then((res) => {
        setDonations(res.data);
        // Calculate total donations
        const total = res.data.reduce(
          (sum, donation) => sum + donation.amount,
          0
        );
        setTotalAmount(total);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ خطأ في جلب التبرعات:", err);
        setLoading(false);
      });
  }, []);

  const filteredDonations = donations.filter(
    (donation) =>
      donation.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.projectName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen mr-64">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          💰 قائمة التبرعات
        </h1>
        <p className="text-gray-600">إدارة ومراجعة جميع التبرعات المستلمة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-blue-500">
          <h3 className="text-gray-500 text-sm mb-1">إجمالي التبرعات</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              ${totalAmount.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-green-500">
          <h3 className="text-gray-500 text-sm mb-1">عدد المتبرعين</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              {donations.length}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-purple-500">
          <h3 className="text-gray-500 text-sm mb-1">متوسط التبرع</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              $
              {donations.length
                ? (totalAmount / donations.length).toFixed(2)
                : "0"}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 bg-white border-b border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
            سجل التبرعات
          </h2>

          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="البحث..."
              className="block w-full pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center p-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-3 text-gray-600">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-right">
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المتبرع
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المبلغ
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المشروع
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    التاريخ
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDonations.length > 0 ? (
                  filteredDonations.map((donation, index) => (
                    <tr key={donation.id || index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-500 font-bold">
                              {donation.firstName?.charAt(0) || ""}
                              {donation.lastName?.charAt(0) || ""}
                            </span>
                          </div>
                          <div className="mr-4 text-right">
                            <div className="text-sm font-medium text-gray-900">
                              {donation.firstName} {donation.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {donation.email || "غير متوفر"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ${donation.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {donation.projectName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {donation.date || "غير متوفر"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          تم استلامه
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                        <span className="mt-2 block text-sm font-medium">
                          لا توجد تبرعات متاحة
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-left">
          <span className="text-sm text-gray-500">
            عرض {filteredDonations.length} من أصل {donations.length} تبرع
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminDonations;
