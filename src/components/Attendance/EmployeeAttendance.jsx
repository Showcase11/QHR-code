import React from "react";
import { ImBell } from "react-icons/im";
import AttendanceLayout from "./AttendanceLayout";
import DataTable from "./DataTable";
import { HeaderSearch } from "./TeamAttendance";

const EmployeeAttendance = () => {
  return (
    <AttendanceLayout select="employee">
      <div className="px-5 py-4 bg-indigo-50 h-screen">
        <HeaderSearch employee={true} />
        <div className="mt-5 px-5 py-3 shadow-sm rounded-sm bg-white flex gap-2 justify-start items-center">
          <ImBell className="text-yellow-400 text-xl" />
          <h2 className="text-md text-gray-700">
            You can only update the attendance record within the last 31 days.
          </h2>
        </div>
        <div className="mt-9 px-5 py-4">
          <DataTable />
        </div>
      </div>
    </AttendanceLayout>
  );
};

export default EmployeeAttendance;
