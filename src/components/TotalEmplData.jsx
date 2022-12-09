import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { getFullDate } from "../utils";
const TotalEmplData = () => {
  const [data, setData] = useState();
  const { url } = useGlobalContext();
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
      <div className="flex flex-col gap-5">
        <div className="text-center mt-10 w-full flex  items-center justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/350/350/arch" alt="Album" />
            </figure>
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
              <p className="">
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
      </div>
    </Layout>
  );
};

export default TotalEmplData;
