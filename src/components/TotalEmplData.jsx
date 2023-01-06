import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { getFullDate } from "../utils";
import DailyAttendanceTable from "./DailyAttendanceTable";
const initialState = {
  startDate: null,
  endDate: null,
};
const TotalEmplData = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const { url, user } = useGlobalContext();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const [formData, setFormData] = useState(initialState);
  const [attendances, setAttendances] = useState([]);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const isFill = formData.startDate !== null && formData.endDate !== null;
  const SearchAttendance = async () => {
    console.log(formData);
    try {
      const res = await axios.post(`${url}/employee/getEmpAttnd`, {
        ...formData,
        userId: params.id,
      });
      console.log(res);
      setAttendances(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const params = useParams();
  console.log(params.id);
  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(`${url}/employee/${params.id}`);
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <Layout>
     <div className="flex flex-col justify-center">
  <div className="flex items-center justify-center pt-4">
        <div className="relative items-stretch flex w-[60%] xs:w-full sm:w-[98%] md:w-[85%] max-sm:w-full lg:w-[65%] xl:w-[43%] border-[1px] border-gray-200 shadow-lg bg-white justify-center overflow-hidden">
            <img
              src={
                data?.image ? data.image : "https://placeimg.com/350/350/arch"
              }
              alt="Album"
              className="object-cover flex-1 xs:hidden sm:hidden md:block max-sm:block lg:block"
            />

            <div className="flex flex-col px-5 justify-start items-start gap-1">
              <p className="">
                <span className="font-semibold">Name : </span>
                {data?.name}
              </p>
              <p className="">
                <span className="font-semibold">Email : </span>
                {data?.email}
              </p>
              <p className="">
                <span className="font-semibold">Status : </span>
                <span className={`text-green-700 bg-green-100 px-2`}>
                  {data?.status}
                </span>
              </p>
              <p className="">
                <span className="font-semibold">Mobile Number : </span>
                {data?.phoneNumber}
              </p>
              <p className="">
                <span className="font-semibold">Emergency Number : </span>
                {data?.emergencyNumber}
              </p>
              <p className="">
                <span className="font-semibold">Department </span>
                {data?.department}
              </p>
              <p className="">
                <span className="font-semibold">Join Date : </span>
                {getFullDate(data?.joined)}
              </p>
              <p className="max-w-[300px]">
                <span className="font-semibold">Address : </span>
                {data?.address}
              </p>
              <h1 className="text-md text-center w-full border-b-2 border-sky-600 text-sky-600 font-semibold font-roboto">
                Bank Details
              </h1>
              <p className="">
                <span className="font-semibold">Account No : </span>
                {data?.bankAccount}
              </p>
              <p className="">
                <span className="font-semibold">IFSC CODE : </span>
                {data?.ifscCode}
              </p>
              <p className="">
                <span className="font-semibold">Branch Name : </span>
                {data?.branchName}
              </p>
              <p className="">
                <span className="font-semibold">UPI : </span>
                {data?.upi}
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 mx-6">
          <h1 className="text-xl font-semibold font-roboto">
            See employee all time attendance by date
          </h1>
          <div className="flex gap-2 items-end mt-8 grid grid-cols-3 xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-1 
          lg:grid-cols-3 xl:grid-cols-3 max-sm:grid-cols-3 sm:w-full md:w-[80%] lg:w-[80%] xl:w-[60%] xs:w-full">
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
              <label className="label text-sm font-roboto">
                Choose End date
              </label>
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
          </div>
          <div className="mt-8">
            <DailyAttendanceTable attendances={attendances} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TotalEmplData;
