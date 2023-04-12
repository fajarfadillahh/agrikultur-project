import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiLeaf } from "react-icons/bi";

// import constants
import { sidebar_links } from "../constants/SidebarLinks";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex w-60 flex-col border-r border-gray-200 bg-white p-3">
      <div className="flex items-center gap-2 px-1 py-3">
        <BiLeaf className="text-2xl text-green-600" />
        <span className="text-[18px] font-extrabold text-gray-900">
          Agrikultur
        </span>
      </div>

      <div className="grid gap-1 py-8">
        {sidebar_links.map((link) => (
          <Link
            to={link.path}
            key={link.key}
            className={`flex h-[42px] items-center gap-1 rounded-md px-4 ${
              location.pathname === link.path
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
