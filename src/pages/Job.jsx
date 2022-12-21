import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components";
import EditModel from "../components/Recruitment/EditModel";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import {IoMdGrid} from 'react-icons/io';
import { IoMdReorder } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/DragDrop";
// import { List } from "../components/List";


const Job = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [openTab, setOpenTab] = useState(1);
  const { url } = useGlobalContext();
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
  useEffect(() => {
    getSingleJob();
  }, []);

  return (
    <Layout>
      <NavLayout select="jobs">
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
              <ul className="flex border-2">
      <li><Link onClick={() => setOpenTab(1)}><IoMdReorder className="text-4xl" /></Link></li>
      <li><Link onClick={() => setOpenTab(2)}><IoMdGrid className="text-4xl" /></Link></li>
    </ul>
              <EditModel data={job} />
            </div>
          )}
        <div className={openTab === 2 ? "block" : "hidden"}>
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Department</th>
        <th>Candiates</th>
        <th>Created Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>{job?.jobTitle}</td>
        <td>{job?.department}</td>
        <td>{job?.quantity}</td>
        <td>{job?.createdAt}</td>
        <td>{job?.status}</td>
        <td>  <button type="button" className="mr-5">
                      <IoMdCreate />
                    </button>
                    <button type="button" className="mr-5">
                      <IoTrashOutline />
                    </button></td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>gjhgjh</td>
        <td>jgjhbj</td>
        <td>fhchgfh</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>gjhgjh</td>
        <td>jgjhbj</td>
        <td>fhchgfh</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    <div className={openTab === 1 ? "block" : "hidden"}>
    <h1 className="menu overflow-y-auto w-full bg-base-100 text-base-content">
    {/* <DndProvider backend={HTML5Backend}>
      <List />
    </DndProvider> */}
    <DndProvider backend={HTML5Backend}>
      <div className="pt-5 pb-10">
        <DragDrop />
      </div>
    </DndProvider>
    </h1>
    </div>
      </NavLayout>
    </Layout>
  );
};

export default Job;
