import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const Recuirtment = () => {
  const { setLoading, url } = useGlobalContext();
  const [getJobDataById, setJobDataById] = useState([]);
  const [status, setStatus] =useState('published');
  const [editJobDataById, latestEdit] = useState({
    jobTitle: "",
    empType: "",
    department: "",
    desc: "",
    closingDate: "",
    quantity: "",
    submitstatus: ""
  });
  const [jobdata, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    try {
      const response = await axios.get(`${url}/job`);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newData = Object.assign({}, getJobDataById, { [name]: value });
    setJobDataById(newData);

    const latestData = Object.assign({}, editJobDataById, { [name]: value });
    latestEdit(latestData);
    console.log(latestData);
  };
const updateStatus = async (id) => {
  try {
    const response = await axios.put(`${url}/job/${id}`, {
   status: status,
    });
    latestEdit(response.data);

    setLoading(false);
    // toast.success("Data updated successfully");
    fetchData();
    console.log(response.data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editJobDataById._id) {
      console.log(editJobDataById);
      try {
        const response = await axios.put(`${url}/job/${editJobDataById._id}`);
        latestEdit(response.data);

        setLoading(false);
        toast.success("Data updated successfully");
        fetchData();
        console.log(response.data);
      } catch (error) {
        toast.error(e?.response?.data?.message);
        setLoading(false);
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(`${url}/job`, editJobDataById);
        latestEdit(response.data);

        setLoading(false);
        toast.success("Data Saved successfully");
        fetchData();
        console.log(response.data);
      } catch (error) {
        toast.error(e?.response?.data?.message);
        setLoading(false);
        console.log(error);
      }
    }
    latestEdit({
      jobTitle: "",
      empType: "",
      department: "",
      desc: "",
      closingDate: "",
      quantity: "",
      submitstatus: ""
    });
  };

  const jobedit = (jobs) => {
    console.log(jobs);
    latestEdit(jobs);
  };

  const jobdelete = async (jobs) => {
    console.log(jobs._id);
    try {
      const response = await axios.delete(`${url}/job/_id`, editJobDataById);
      latestEdit(response.data);

      setLoading(false);
      toast.success("Data deleted successfully");
      fetchData();
      console.log(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Layout>
      <NavLayout select="jobs">
        
        <div className="flex space-x-2 justify-center pr-4 pt-4 float-right">
          <a
            href="#job"
            className="inline-block px-6 py-2.5 mb-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            New Job
          </a>
          <div className="modal" id="job">
            <div className="modal-box w-9/12 max-w-3xl">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <form onSubmit={handleSubmit}>
                      <div className="flow-root">
                        <div className="form-group pb-3">
                          <label
                            for="jobTitle"
                            className="block text-sm font-semibold text-gray-800"
                          >
                            Job Title *
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            required
                            value={editJobDataById.jobTitle}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            id="name"
                          ></input>
                        </div>
                        <div className="float-left w-[49%] pr-5">
                          <div className="form-group pb-3">
                            <label
                              for="EmployeementType"
                              className="block text-sm font-semibold text-gray-800"
                            >
                              Employeement Type *
                            </label>
                            <select
                              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                              placeholder="Select Template"
                              value={editJobDataById.empType}
                              onChange={handleChange}
                              id="empType"
                              type="text"
                              required
                              name="empType"
                            >
                              <option>All Employment Types</option>
                              <option>Contractor</option>
                              <option>Freelancer</option>
                              <option>Full-time</option>
                              <option>Intern</option>
                              <option>Part-time</option>
                            </select>
                          </div>
                          <div className="form-group pb-3">
                            <label
                              for="Department"
                              className="block text-sm font-semibold text-gray-800"
                            >
                              Department *
                            </label>
                            <select
                              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                              placeholder="Select Template"
                              value={editJobDataById.department}
                              onChange={handleChange}
                              id="department"
                              type="text"
                              required
                              name="department"
                            >
                              <option>All Departments</option>
                              <option>Finance</option>
                              <option>HR</option>
                              <option>IT</option>
                              <option>Management</option>
                              <option>Marketing</option>
                              <option>Operations</option>
                              <option>Sales</option>
                              <option>qs</option>
                            </select>
                          </div>
                          <div className="form-group pb-3">
                            <label
                              for="description"
                              className="block text-sm font-semibold text-gray-800"
                            >
                              Description *
                            </label>
                            <textarea
                              type="text"
                              name="desc"
                              required
                              value={editJobDataById.desc}
                              onChange={handleChange}
                              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                              id="gender"
                            />
                          </div>
                        </div>
                        <div className="float-left w-[49%]">
                          <div className="form-group pb-3">
                            <label
                              for="closingDate"
                              className="block text-sm font-semibold text-gray-800"
                            >
                              Expected Closing Date
                            </label>
                            <input
                              type="date"
                              name="closingDate"
                              required
                              value={editJobDataById.closingDate}
                              onChange={handleChange}
                              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                              id="gender"
                            ></input>
                          </div>
                          <div className="form-group pb-10">
                            <label
                              for="quality"
                              className="block text-sm font-semibold text-gray-800"
                            >
                              Quality *
                            </label>
                            <input
                              type="number"
                              name="quantity"
                              required
                              onChange={handleChange}
                              value={editJobDataById.quantity}
                              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                              id="emergencyNumber"
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex sm:justify-center lg:justify-start mt-5">
                      <button className="dropdown dropdown-top" type='submit' name="submitstatus"
                       value={editJobDataById.submitstatus}
                       onChange={handleChange}
                       >
               <label tabIndex={0} className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Click</label>
                     <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li><a>Published</a></li>
                              <li><a>Internal use</a></li>
                              <li><a>Draft</a></li>
                     </ul>
                    </button>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            id="job"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"
                          >
                            <a href="#">Cancel</a>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100">
      {jobdata.map((jobs) => (
        <div className="navbar bg-base-100 shadow mb-5">
          <div className="flex-1 gap-y-6">
            <div key={jobs.id}>
              <div className="flex pr-5">
              {jobs.jobTitle}
              {jobs.department}<br />
              {jobs.quantity}Candiates
              </div>
            </div>
          </div>
          <div className="flex-none gap-5">
            <div className="form-group pb-3">
              <select
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                placeholder="Select Template"
                value={jobs.status}
                onChange={(e) => setStatus(e.target.value)}
                onClick={() => updateStatus(jobs._id)}
                id="office"
                type="text"
                required
                name="status"
              >
                <option>Published</option>
                <option>Internal Use</option>
                <option>Closed</option>
              </select>
            </div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="block w-full px-4 py-2 bg-white border rounded-md cursor-pointer"
              >
                <IoEllipsisHorizontalSharp />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={() => jobedit(jobs)}>
                  <a href="#job">Edit</a>
                </li>
                <li onClick={() => jobdelete(jobs)}>
                  <a href="#delete">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      </div>
      </NavLayout>
    </Layout>
  );
};

export default Recuirtment;
