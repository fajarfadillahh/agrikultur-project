import React from "react";
import { Link } from "react-router-dom";
import { BiLeaf } from "react-icons/bi";

const FormHeader = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="grid justify-items-center gap-4 text-center">
      <BiLeaf className="text-6xl text-green-600" />

      <div className="grid gap-2">
        <h2 className="section-title text-[30px] font-extrabold">{heading}</h2>
        <p className="section-text">
          {paragraph}
          <Link
            to={linkUrl}
            className="font-medium text-green-600 hover:text-green-700"
          >
            {linkName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
