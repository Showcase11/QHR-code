import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components";
import EditModel from "../components/Recruitment/EditModel";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import { IoMdGrid } from "react-icons/io";
import { IoMdReorder } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/DragDrop";
import toast from "react-hot-toast";
import EditJobData from "../components/EditJobData";
import JobData from "../components/JobData";
import data from "../data.json";
import ReadOnlyRow from "../components/JobData";
import EditableRow from "../components/EditJobData";
import CandidateTable from "../components/Recruitment/CandidateTable";
// import { List } from "../components/List";

const Job = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [openTab, setOpenTab] = useState(1);
  const [contacts, setContacts] = useState(data);
  const { url, user } = useGlobalContext();
  // console.log();
  console.log(params);
  const [job, setJob] = useState({});

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

  const fetchCndidates = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${url}/candidate/department?q=${job.department}`
      );
      setContacts(res.data);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
  }, []);
  useEffect(() => {
    fetchCndidates();
  }, [job]);

  return (
    <Layout>
      <NavLayout select="jobs">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="flex justify-end items-center bg-gray-100">
            <label
              htmlFor="my-modal-4"
              className="btn mr-5 my-6 border-none bg-sky-500 text-white"
            >
              Edit
            </label>

            <EditModel data={job} />
          </div>
        )}
        <div className="flex items-center justify-center">
          {contacts.length === 0 ? (
            <h1 className="text-md font-semibold text-gray-700 mx-8">
              No data available
            </h1>
          ) : (
            <CandidateTable candidateData={contacts} />
          )}
        </div>
      </NavLayout>
    </Layout>
  );
};

export default Job;
