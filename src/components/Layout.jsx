import React from "react";

// import components
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen w-screen flex-row overflow-hidden bg-white">
      <Sidebar />
      {children}
    </main>
  );
};

export default Layout;
