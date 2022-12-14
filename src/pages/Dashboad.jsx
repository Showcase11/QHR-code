import React, { useState } from "react";
import { Layout } from "../components";
import DepartmentTable from "../components/Department/DepartmentTable";
import EmployeeTable from "../components/EmployeeTable";
import { PeiChart } from "../components/PeiChart";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DailyAttendanceTable from "../components/DailyAttendanceTable";
import axios from "axios";
const Dashboad = () => {
  const {
    user,
    pendingData,
    fetchLeaveApplications,
    fetchDepartments,
    departments,
    loading,
    fetchUsers,
    allusers,
    url,
  } = useGlobalContext();
  const [attendances, setAttendances] = useState([]);

  const getDailyAttendance = async () => {
    const res = await axios.get(`${url}/employee/getPerDayAttendance`);

    setAttendances(res.data);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  useEffect(() => {
    fetchLeaveApplications();
    fetchDepartments();
    fetchUsers();
    getDailyAttendance();
  }, []);
  return (
    <Layout>
      <div className="h-full px-16 mb-12">
        <div className="flex flex-wrap gap-5 items-center justify-center ">
          <div
            className="shadow-md rounded-sm px-6 py-3 border-l-4 border-green-600 mt-12 cursor-pointer"
            onClick={() => navigate("/departments")}
          >
            <h1 className="text-2xl font-semibold text-green-600  font-rubik">
              DEPARMENTS
            </h1>
            <p className="text-center text-green-600 font-semibold text-xl font-roboto">
              {loading ? "loading.." : departments.length}
            </p>
          </div>
          <div className="shadow-md rounded-sm px-6 py-3 border-l-4 border-blue-600 mt-12">
            <h1 className="text-2xl font-semibold text-blue-600 font-rubik ">
              EMP ON WORK
            </h1>
            <p className="text-center font-semibold text-blue-600 text-xl font-roboto">
              {allusers.length}
            </p>
          </div>

          <div className="shadow-md rounded-sm px-6 py-3 border-l-4 border-red-600 mt-12">
            <h1 className="text-2xl font-semibold font-rubik text-red-600">
              EMP ON LEAVE
            </h1>
            <p className="text-center font-semibold text-red-600 text-xl font-roboto">
              0
            </p>
          </div>
          <div
            className="shadow-md rounded-sm px-6 py-3 border-l-4 border-cyan-600 mt-12 cursor-pointer"
            onClick={() => navigate("/leaveAdmin")}
          >
            <h1 className="text-2xl font-semibold text-cyan-600 font-rubik ">
              LEAVE APPLICATION
            </h1>
            <p className="text-center font-semibold text-cyan-600 text-xl font-roboto">
              {pendingData.length}
            </p>
          </div>
        </div>
        <div className="flex gap-8 mt-12">
          <div className="w-[500px]">
            <div className="">
              <h2 className="text-xl my-5 font-roboto font-semibold ">
                Department Data
              </h2>
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                <DepartmentTable departments={departments} />
              )}
            </div>
          </div>
        </div>
        <div className="my-8">
          <h1 className="text-xl my-5 font-roboto font-semibold  ">
            Today's Employee Attendance
          </h1>
          <DailyAttendanceTable attendances={attendances} />
        </div>
        <div className="mt-8">
          <h1 className="text-xl my-5 font-roboto font-semibold  ">
            Employee Details
          </h1>
          <EmployeeTable users={allusers} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboad;
