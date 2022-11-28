import React from "react";
import { Layout } from "../components";
import DepartmentTable from "../components/Department/DepartmentTable";
import EmployeeTable from "../components/EmployeeTable";
import { PeiChart } from "../components/PeiChart";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DailyAttendanceTable from "../components/DailyAttendanceTable";
const Dashboad = () => {
  const { user, pendingData, fetchAttendance } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  useEffect(() => {
    fetchAttendance();
  }, []);
  return (
    <Layout>
      <div className="h-full px-16 mb-12">
        <div className="flex flex-wrap gap-5 items-center justify-center ">
          <div className="shadow-md rounded-sm px-6 py-3 border-l-4 border-green-600 mt-12">
            <h1 className="text-2xl font-semibold text-green-600 font-rubik">
              DEPARMENTS
            </h1>
            <p className="text-center text-green-600 font-semibold text-xl font-roboto">
              08
            </p>
          </div>
          <div className="shadow-md rounded-sm px-6 py-3 border-l-4 border-blue-600 mt-12">
            <h1 className="text-2xl font-semibold text-blue-600 font-rubik ">
              EMP ON WORK
            </h1>
            <p className="text-center font-semibold text-blue-600 text-xl font-roboto">
              60
            </p>
          </div>

          <div className="shadow-md rounded-sm px-6 py-3 border-l-4 border-red-600 mt-12">
            <h1 className="text-2xl font-semibold font-rubik text-red-600">
              EMP ON LEAVE
            </h1>
            <p className="text-center font-semibold text-red-600 text-xl font-roboto">
              12
            </p>
          </div>
          <div
            className="shadow-md rounded-sm px-6 py-3 border-l-4 border-cyan-600 mt-12 cursor-pointer"
            onClick={() => navigate("/leaveAdmin")}
          >
            <h1 className="text-2xl font-semibold text-cyan-600 font-rubik ">
              LEAVE APPPLICATION
            </h1>
            <p className="text-center font-semibold text-cyan-600 text-xl font-roboto">
              {pendingData.length}
            </p>
          </div>
        </div>
        <div className="flex gap-8 mt-12">
          <div className="flex-1">
            <div className="">
              <h2 className="text-xl my-5 font-roboto font-semibold ">
                Department Data
              </h2>
              <DepartmentTable />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-xl font-roboto font-semibold  ">
              Employee Status
            </h1>
            <div className="px-9 py-12 h-auto w-[400px]">
              <PeiChart />
            </div>
          </div>
        </div>
        <div className="my-8">
          <h1 className="text-xl my-5 font-roboto font-semibold  ">
            Today's Employee Attendance
          </h1>
          <DailyAttendanceTable />
        </div>
        <div className="mt-8">
          <h1 className="text-xl my-5 font-roboto font-semibold  ">
            Employee Details
          </h1>
          <EmployeeTable />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboad;
