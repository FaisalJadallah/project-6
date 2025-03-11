import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// 🔐 الدالة التي تتحقق مما إذا كان المستخدم مسجلاً كـ admin
const isAdminAuthenticated = () => {
  const adminRole = localStorage.getItem("adminRole");
  return adminRole === "admin"; // فقط إذا كان admin
};

// 🛡️ مكون لحماية المسار
const ProtectedRoute = () => {
  return isAdminAuthenticated() ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
