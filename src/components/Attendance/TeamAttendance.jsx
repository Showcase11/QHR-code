import React from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import { ImBell, ImDownload2 } from "react-icons/im";
import AttendanceLayout from "./AttendanceLayout";
import DataTable from "./DataTable";
import PopUpMessage from "./PopUpMessage";

export const HeaderSearch = ({ employee, setOpen, setMessage }) => {
  const handleApprove = () => {
    console.log("Approve");

    setOpen(true);
  };
  const handleReject = () => {
    setMessage("Reject Attendance");

    setOpen(true);
  };
  console.log(employee);
  return (
    <div className="flex justify-between mt-3 items-center">
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
            <FaDotCircle />
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
        <div className="border-[1px] flex  bg-white gap-2 items-center border-gray-300 px-3 py-2 rounded-lg">
          <BiSearchAlt />
          <input
            type="search"
            placeholder="search.."
            className="text-md text-gray-400 border-none outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {employee && (
          <button className="btn btn-active   text-white">
            <ImDownload2 />
          </button>
        )}

        <button
          className="btn btn-active btn-error text-white"
          onClick={handleReject}
        >
          Reject
        </button>
        <button
          htmlFor="my-modal-3"
          className={`btn btn-active btn-success text-white`}
          onClick={handleApprove}
        >
          Approve
        </button>
        <PopUpMessage />
        {employee && (
          <>
            <button className={`btn btn-active  text-white`}>Revert</button>
            <button className={`btn btn-active   text-white`}>Confirm</button>
          </>
        )}
      </div>
    </div>
  );
};

const TeamAttendance = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState("Something Went wrong");
  const [pepoples, setPeoples] = useState([
    {
      id: 1,
      name: "Rahul Prahdan",
    },
    {
      id: 2,
      name: "Binita Swain",
    },
  ]);

  return (
    <AttendanceLayout select="team">
      <div className="px-5 py-4 bg-indigo-50 h-screen">
        <HeaderSearch setOpen={setOpen} setMessage={setMessage} />
        <div className="mt-5 px-5 py-3 shadow-sm rounded-sm bg-white flex gap-2 justify-start items-center">
          <ImBell className="text-yellow-400 text-xl" />
          <h2 className="text-md text-gray-700">
            You can only update the attendance record within the last 31 days.
          </h2>
        </div>
        <div className="mt-9  px-5 py-4">
          <DataTable />
        </div>

        <PopUpMessage
          message={message}
          open={open}
          setOpen={setOpen}
          pepoples={pepoples}
        />
      </div>
    </AttendanceLayout>
  );
};

export default TeamAttendance;
