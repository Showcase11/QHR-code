import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import { ImDownload2 } from "react-icons/im";
const HeaderSearch = ({ employee, setOpen, setMessage }) => {
  const handleApprove = () => {
    // console.log("Approve");
    setMessage("approve");
    setOpen(true);
  };
  const handleReject = () => {
    setMessage("reject");

    setOpen(true);
  };

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

export default HeaderSearch;
