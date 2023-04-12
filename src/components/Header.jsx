import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
      <div className="inline-flex h-[42px] w-[300px] items-center gap-2 rounded-md border border-gray-200 px-4 text-gray-600">
        <RiSearchLine />
        <input
          type="text"
          placeholder="Search..."
          className="h-full w-full text-gray-900 outline-none"
        />
      </div>

      <div>right content</div>
    </div>
  );
};

export default Header;
