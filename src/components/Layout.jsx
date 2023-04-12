import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen w-screen flex-row overflow-hidden bg-white">
      {children}
    </main>
  );
};

export default Layout;
