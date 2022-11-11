import React, { useState } from "react";
import AttendanceLayout from "./AttendanceLayout";
import General from "./General";
import InCharge from "./InCharge";
import SettingSideBar from "./SettingSideBar";

const SettingLayout = ({ children, select }) => {
  const [isGeneral, setIsGeneral] = useState(true);

  return (
    <AttendanceLayout select={select}>
      <div className="px-9 py-4 bg-indigo-50 h-screen">
        <div className="flex gap-5 flex-row h-auto">
          {/* children */}
          {children}
          <div className="basis-1/4 bg-white shadow-sm px-9  h-auto ">
            <h1 className="text-xl font-bold text-gray-600 font-['Poppins] mt-6">
              Guide
            </h1>
            <div className="font-['Poppins] mt-4">
              <h3 className="font-bold text-md text-gray-600">
                Time Attendance
              </h3>
              <p className="text-sm text-gray-400 tracking-wider">
                Keeps track of employees’ working hours, clock in and out time,
                and which task they were doing. Time Attendance can be used with
                Payroll to calculate salary automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AttendanceLayout>
  );
};

export default SettingLayout;
