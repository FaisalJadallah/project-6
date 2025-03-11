import React from "react";
import AdminLayout from "../components/admin/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl mb-4">لوحة تحكم المدير</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">المتبرع</th>
              <th className="border p-2">المبلغ</th>
              <th className="border p-2">المشروع</th>
            </tr>
          </thead>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
