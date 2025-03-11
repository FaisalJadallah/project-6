import React from "react";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
