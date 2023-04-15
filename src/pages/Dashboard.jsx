import React from "react";
import { RiSearchLine } from "react-icons/ri";

// import data
import { user_data } from "../constants/UserData";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="section-title">Dashboard</h1>

      <div className="grid gap-4">
        <div className="inline-flex h-[42px] w-[300px] items-center gap-2 rounded-md border border-gray-200 px-4 text-gray-600">
          <RiSearchLine />
          <input
            type="text"
            placeholder="Search user"
            className="h-full w-full text-gray-900 outline-none"
          />
        </div>

        <table className="table-auto border border-gray-200">
          <thead>
            <tr className="divide-x bg-gray-100 text-left">
              {[["Number"], ["User Name"], ["Address"], ["Email"]].map(
                ([label], index) => {
                  return (
                    <th
                      key={index}
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 font-semibold text-gray-600"
                    >
                      {label}
                    </th>
                  );
                }
              )}
            </tr>
          </thead>

          <tbody>
            {user_data.map((user) => {
              return (
                <tr key={user.id} className="divide-x bg-white even:bg-gray-50">
                  <td className="border-b border-gray-200 px-5 py-5">
                    {user.nik}
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5">
                    {user.name}
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5">
                    {user.address}
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5">
                    {user.email}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
