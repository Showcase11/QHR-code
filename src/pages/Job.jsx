import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components";
import EditModel from "../components/Recruitment/EditModel";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import {IoMdGrid} from 'react-icons/io';
import { IoMdReorder } from "react-icons/io";

const Job = () => {
  const [loading, setLoading] = useState(false);
  const[button, setButton] = useState(false);
  const params = useParams();
  const { url } = useGlobalContext();
  console.log(params);
  const [job, setJob] = useState({});
 const handleClick = () => {
  setButton();
 }
  const getSingleJob = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/job/${params.id}`);
      setJob(res.data);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleJob();
  }, []);

  return (
    <Layout>
      <NavLayout select="jobs">
        <div className="">
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <div className="flex justify-end items-center ">
              <label
                htmlFor="my-modal-4"
                className="btn mr-5 my-6 border-none bg-sky-500 text-white"
              >
                Edit
              </label>
              <IoMdReorder onClick={handleClick} className="text-4xl" />
              <IoMdGrid onClick={handleClick} className="text-3xl" />
              <EditModel data={job} />
            </div>
          )}
        </div>
        <div>{job?.jobTitle}</div>
      </NavLayout>
    </Layout>
  );
};

export default Job;
