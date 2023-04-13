import React from "react";
import { Outlet } from "react-router-dom";

// import components
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="flex h-screen w-screen flex-row overflow-hidden bg-white">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="min-h-0 flex-1 overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
