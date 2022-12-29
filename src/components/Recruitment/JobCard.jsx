import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const JobCard = ({ data }) => {
  const navigate = useNavigate();
  const { deleteJob, updateStatus } = useGlobalContext();

  return (
    <div className="px-8 rounded-sm bg-white py-5 shadow-sm sm:px-3 xs:px-2 sm:py-1 xs:py-2 shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1
            className="text-xl  font-roboto capitalize font-semibold cursor-pointer  text-gray-900 hover:underline "
            onClick={() => navigate(`/recruitment/jobs/${data._id}`)}
          >
            {data.jobTitle}
          </h1>
          <p className="text-sm font-normal text-gray-400 sm:pl-4 xs:ml-5">
            {data.department}{" "}
            <span className="font-semibold">Qurinom Solutions</span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <select
            className="select select-bordered  max-w-xs"
            value={data.status}
            onChange={(e) =>
              updateStatus({ id: data._id, status: e.target.value })
            }
          >
            <option value="published">Published</option>
            <option value="closed">Closed</option>
            <option value="internal">Internal Use</option>
          </select>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" cursor-pointer m-1">
              {" "}
              <IoEllipsisHorizontalSharp />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content flex flex-col px-3 bg-sky-100 gap-2 shadow-sm menu p-2   rounded-box w-auto"
            >
              <label
                onClick={() => navigate(`/recruitment/jobs/${data._id}`)}
                className="text-sm flex items-center gap-2 justify-start font-roboto cursor-pointer "
              >
                <GrView /> View
              </label>

              <h1
                className="text-sm flex items-center cursor-pointer gap-2 justify-start font-roboto"
                onClick={() => deleteJob(data._id)}
              >
                {" "}
                <FaTrashAlt /> Delete
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-roboto text-gray-900">{10} Candidates</p>
        <p className="text-sm font-roboto text-gray-900">
          {moment(data.updatedAt).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
