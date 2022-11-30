import React, { useState, useEffect } from "react";
import AttendanceLayout from "../Attendance/AttendanceLayout";
import { ImBell } from "react-icons/im";
import { IoTimerOutline } from "react-icons/io5";
import { BsArrowRightCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import useTimer from "../../utils/useTimer";
import { formatTime } from "../../utils";
import { BiPlayCircle, BiReset } from "react-icons/bi";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import NormalTable from "./NormalTable";
const Attendance = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    setTimer,
    outTime,
    inTime,
  } = useTimer();
  const { selfAttendance, setSelfAttendance, setLoading } = useGlobalContext();
  // console.log(localStorage.getItem("timer");
  const [takeData, setTakeData] = useState();

  const handleAttendance = async () => {
    handleReset();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    try {
      const res = await axios.post(
        "https://apiqhr.qurinomsolutions.com/api/employee/takeAttendance",
        {
          inTime: formatTime(inTime),
          outTime: formatTime(inTime + timer),
          duration: formatTime(timer),
          date: currentDate,
        }
      );
      console.log(new Date().getDate().toString());
      setTakeData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDailyAttendance = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://apiqhr.qurinomsolutions.com/api/employee/selfAttendance"
      );
      console.log(res);
      setSelfAttendance(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDailyAttendance();
  }, [takeData]);
  const cardData = [
    {
      name: "Work Schedule",
      value: "8h",
    },
    {
      name: "Logged Time",
      value: "0h",
    },
    {
      name: "Paid Time",
      value: "8h",
    },
    {
      name: "Deficit",
      value: "0h",
    },
    {
      name: "Overtime",
      value: "8h",
    },
  ];
  return (
    <AttendanceLayout select="self">
      <div className="px-5 py-4 bg-indigo-50 h-screen">
        {/* Notification */}
        <div className="mt-5 px-5 py-3 shadow-sm rounded-sm bg-white flex gap-2 justify-start items-center">
          <ImBell className="text-yellow-400 text-xl" />
          <h2 className="text-md text-gray-700">
            You can only update the attendance record within the last 31 days.
          </h2>
        </div>
        {/* First part */}
        <div className="flex  flex-col   mt-5 bg-white shadow-sm py-3">
          {/* header */}
          <div className="flex justify-between  px-5 items-center w-full border-b-[1px] border-gray-300 pb-1 ">
            <div className="flex items-center gap-2 py-4">
              <div className="p-2 rounded-full bg-green-500">
                <IoTimerOutline className="text-white font-bold" />
              </div>

              <h1 className="text-md font-semibold text-gray-600">
                My Attendance
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-gray-100 px-3 py-2 gap-1 flex justify-between items-center my-5">
                <h1 className="font-bold font-sans text-md">
                  Last clock in {formatTime(inTime)}
                </h1>
                <h1 className="font-bold font-sans text-md">
                  Last clock out {formatTime(outTime)}
                </h1>
              </div>

              {!isActive && !isPaused ? (
                <button
                  onClick={handleStart}
                  className="hover:scale-110 transition-transform ease-in-out delay-75 bg-green-600 font-medium font-sans  text-md flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md"
                >
                  <BsArrowRightCircleFill /> Clock in {formatTime(timer)}
                </button>
              ) : isPaused ? (
                <button
                  onClick={handlePause}
                  className="hover:scale-110 transition-transform ease-in-out delay-75 bg-orange-600 font-medium font-sans  text-md flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md"
                >
                  <BsPauseCircleFill /> Pause {formatTime(timer)}
                </button>
              ) : (
                <button
                  onClick={handleResume}
                  className="hover:scale-110 transition-transform ease-in-out delay-75 bg-yellow-600 font-medium font-sans  text-md flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md"
                >
                  <BiPlayCircle className="text-white" /> Resume{" "}
                  {formatTime(timer)}
                </button>
              )}
              {isActive && (
                <button
                  onClick={handleAttendance}
                  className="hover:scale-110 transition-transform ease-in-out delay-75 bg-red-600 font-medium font-sans  text-md flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md"
                >
                  <BiReset /> Clock out
                </button>
              )}
            </div>
          </div>
          {/* body */}
          <div className="flex justify-between my-3  px-5">
            <div className="flex gap-2  items-center">
              <select className="select select-bordered  backdrop: max-w-xs">
                <option disabled selected>
                  02 Nov 2022 - 01 Dec 2022
                </option>
                <option>02 Nov 2022 - 01 Dec 2022</option>
                <option>05 Nov 2022 - 01 Dec 2052</option>
              </select>
              <select className="select select-bordered  max-w-xs">
                <option disabled selected>
                  All status
                </option>
                <option>
                  <FaDotCircle className="text-green-600" />
                  Approved
                </option>
                <option>
                  Reject
                  <FaDotCircle className="text-red-600" />
                </option>
                <option>
                  <FaDotCircle className="text-orange-600" />
                  Pending
                </option>
              </select>
              <select className="select select-bordered  backdrop: max-w-xs">
                <option disabled selected>
                  All locations
                </option>
                <option>N/A</option>
                <option>outside</option>
                <option>inside</option>
              </select>
              <select className="select select-bordered w-auto truncate backdrop:max-w-xs">
                <option disabled selected>
                  All Records
                </option>
                <option>missing clock in/out</option>
                <option>Edit paid time</option>
                <option>Edit OT</option>
                <option>Clocking on Holidays/Leave/Non-working days</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-1">
              <FaDotCircle className="text-orange-600" />
              <p className="text-sm font-semibold text-gray-400">1 Pending</p>
            </div>
          </div>
          {/* Cards */}
          <div className="flex items-center flex-wrap gap-3 justify-start mx-6 my-4">
            {cardData.map((data, i) => (
              <div
                key={i}
                className="bg-white px-5 rounded-lg py-2 w-[200px] shadow-md"
              >
                <h2 className="text-green-600 font-bold text-lg">
                  {data.name}
                </h2>
                <p className="text-sm font-semibold text-gray-500">
                  {data.value}
                </p>
              </div>
            ))}
          </div>
          {/* Data Table */}
          <div className="w-full mt-8">
            <NormalTable />
          </div>
        </div>
      </div>
    </AttendanceLayout>
  );
};

export default Attendance;
