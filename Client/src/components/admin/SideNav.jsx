import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: "/admin/admindashboard", icon: "🏠", label: "الصفحة الرئيسية" },
    // { path: "/admin/admindonations", icon: "💰", label: "التبرعات" },
    { path: "/admin/adminprojects", icon: "📂", label: "المشاريع" },
    { path: "/admin/users", icon: "👤", label: "المستخدمون" },
    { path: "/admin/adminmessages", icon: "📩", label: "الرسائل" }, // ✅ تمت إضافة قسم الرسائل
  ];

  return (
    <div
      className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white fixed right-0 top-0 h-screen transition-all duration-300 z-50 shadow-xl rtl ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        {!collapsed && (
          <h2 className="text-2xl font-bold text-center text-white">
            لوحة التحكم
          </h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white"
        >
          {collapsed ? "➡️" : "⬅️"}
        </button>
      </div>

      <div className="py-6">
        <ul className="space-y-2 px-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center py-3 px-4 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && (
                  <span className="mr-3 font-medium">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* <div className="px-3 mt-10 pt-6 border-t border-gray-700">
          <Link
            to="/admin/logout"
            className="flex items-center py-3 px-4 rounded-lg text-red-300 hover:bg-red-700 hover:text-white transition-all"
          >
            <span className="text-xl">🚪</span>
            {!collapsed && (
              <span className="mr-3 font-medium">تسجيل الخروج</span>
            )}
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SideNav;
