import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import toast from "react-hot-toast";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import moment from "moment";

const JobCard = ({ data }) => {
  const { url, fetchJobData } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const updateStatus = async (id, status) => {
    try {
      setLoading(true);
      const res = await axios.put(`${url}/job/${id}`, { status: status });
      console.log(res);
      setLoading(false);
      fetchJobData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="px-8 rounded-sm bg-white py-5 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-xl  font-roboto capitalize font-semibold cursor-pointer text-gray-900 hover:underline ">
            {data.jobTitle}
          </h1>
          <p className="text-sm font-normal text-gray-400">
            {data.department}{" "}
            <span className="font-semibold">Qurinom Solutions</span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <select
            className="select select-bordered  max-w-xs"
            value={data.status}
            onChange={(e) => updateStatus(data._id, e.target.value)}
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
              <h1 className="text-sm flex items-center gap-2 justify-start font-roboto cursor-pointer ">
                <GrEdit /> Edit
              </h1>
              <h1 className="text-sm flex items-center gap-2 justify-start font-roboto">
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
