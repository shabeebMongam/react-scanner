import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-white h-screen  ">
      <div className="bg-gradient-to-t from-blue-200 via-white h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
