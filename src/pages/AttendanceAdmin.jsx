import React, { useState } from "react";
import { Layout } from "../components";

import axios from "axios";
import { useGlobalContext } from "../context/context";
import DailyAttendanceTable from "../components/DailyAttendanceTable";
const initialState = {
  startDate: null,
  endDate: null,
};
const AttendanceAdmin = () => {
  const { url } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const [attendances, setAttendances] = useState([]);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const isFill = formData.startDate !== null && formData.endDate !== null;
  const SearchAttendance = async () => {
    console.log(formData);
    try {
      const res = await axios.post(`${url}/employee/getByDate`, formData);
      console.log(res);
      setAttendances(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="px-8 py-6">
        <h1 className="text-lg font-roboto font-semibold text-gray-500">
          Hello Admin Here you can check attendance between any date
        </h1>
        <h1 className="text-md font-roboto  text-green-400">
          You can also check perday attendance by selecting same date in both
          side
        </h1>
        <div className="flex gap-2 items-end mt-8">
          <div className="form-control  max-w-xs">
            <label className="label text-sm font-roboto">
              Choose Start date
            </label>
            <input
              required
              type="date"
              id="startDate"
              value={formData.leaveDate}
              className="input input-bordered input-md max-w-xs"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control  max-w-xs">
            <label className="label text-sm font-roboto">Choose End date</label>
            <input
              required
              type="date"
              id="endDate"
              value={formData.leaveDate}
              className="input input-bordered input-md  max-w-xs"
              onChange={onChangeHandler}
            />
          </div>
          <button
            disabled={!isFill}
            className={`btn `}
            onClick={SearchAttendance}
          >
            Search
          </button>
        </div>
        <div className="mt-8">
          <DailyAttendanceTable attendances={attendances} />
        </div>
      </div>
    </Layout>
  );
};

export default AttendanceAdmin;
