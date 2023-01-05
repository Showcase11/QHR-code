import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import DailyAttendanceTable from "../components/DailyAttendanceTable";
const initialState = {
  startDate: null,
  endDate: null,
};
const AttendanceAdmin = () => {
  const navigate = useNavigate();
  const { url, user } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const [attendances, setAttendances] = useState([]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
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
        <div className="lg:w-[80%] md:w-full xl:w-[60%] max-sm:w-full sm:w-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 max-sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-5">
        <div className="form-control">
        <label className="label text-sm font-roboto">
              Choose Start date
            </label>
            <input
              required
              type="date"
              id="startDate"
              value={formData.leaveDate}
              className="input input-bordered input-md"
              onChange={onChangeHandler}
            />
            </div>
            <div className="form-control">
            <label className="label text-sm font-roboto">Choose End date</label>
            <input
              required
              type="date"
              id="endDate"
              value={formData.leaveDate}
              className="input input-bordered input-md"
              onChange={onChangeHandler}
            />
            </div>
            <div className="form-control">
            <label className="label text-sm font-roboto">
              Search
            </label>
            <button
            disabled={!isFill}
            className={`btn `}
            onClick={SearchAttendance}
          >
            Search
          </button>
          </div>
          </div>
        {/* <div className="flex gap-2 w-full md:[50%] lg:[50%] items-end mt-8 grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          <div className="form-control">
            <label className="label text-sm font-roboto">
              Choose Start date
            </label>
            <input
              required
              type="date"
              id="startDate"
              value={formData.leaveDate}
              className="input input-bordered input-md"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label className="label text-sm font-roboto">Choose End date</label>
            <input
              required
              type="date"
              id="endDate"
              value={formData.leaveDate}
              className="input input-bordered input-md"
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
        </div> */}
        <div className="mt-8">
          <DailyAttendanceTable attendances={attendances} />
        </div>
      </div>
    </Layout>
  );
};

export default AttendanceAdmin;
