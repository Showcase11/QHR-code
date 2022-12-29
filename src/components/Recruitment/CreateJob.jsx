import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import toast from "react-hot-toast";
const CreateJob = () => {
  const { setLoading, url, fetchJobData } = useGlobalContext();
  const initialState = {
    jobTitle: "",
    empType: "",
    department: "",
    desc: "",
    closingDate: "",
    quantity: "",
    status: "published",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createJob = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const res = await axios.post(`${url}/job`, formData);
      console.log(res.data);
      setLoading(false);
      toast.success("Job Added Successfully");
      fetchJobData();
    } catch (error) {
      toast.error("Something went wrong! Try again later");
      setLoading(false);
    }
  };
  const resetForm = () => {
    setFormData(initialState);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Create a new Jobs</h3>
          <div className="py-4">
            <form onSubmit={createJob}>
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
                    value={formData.jobTitle}
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
                      value={formData.empType}
                      onChange={handleChange}
                      id="empType"
                      type="text"
                      required
                      name="empType"
                    >
                      <option value="">All Employment Types</option>
                      <option value="contract">Contractor</option>
                      <option value="freecenler">Freelancer</option>
                      <option value="fte">Full-time</option>
                      <option value="intern">Intern</option>
                      <option value="partTime">Part-time</option>
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
                      value={formData.department}
                      onChange={handleChange}
                      id="department"
                      type="text"
                      required
                      name="department"
                    >
                      <option value="">All Departments</option>
                      <option value="FOP">Finance</option>
                      <option value="HR">HR</option>
                      <option value="UIX">UI/UX</option>
                      <option value="FOP">Finance Operations</option>
                      <option value="MDV">Mobile Development</option>
                      <option value="DMR">Degital Marketing</option>
                      <option value="GPS">Graphics Design</option>
                      <option value="COT">Content Team</option>
                      <option value="SAT">Sales Team</option>
                      <option value="WEB">Web Development</option>
                      <option value="DVS">DEVOPS</option>
                    </select>
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
                      value={formData.closingDate}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="gender"
                    ></input>
                  </div>
                  <div className="form-group pb-2">
                    <label
                      for="quality"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Quantity *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      required
                      onChange={handleChange}
                      value={formData.quantity}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="quantity"
                    ></input>
                  </div>
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
                    value={formData.desc}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    id="gender"
                  />
                </div>
                <div className="form-group pb-3">
                  <label
                    for="EmployeementType"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Status
                  </label>
                  <select
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Select Template"
                    value={formData.status}
                    onChange={handleChange}
                    id="status"
                    type="text"
                    required
                    name="status"
                  >
                    <option value="published">Published</option>
                    <option value="closed">Closed</option>
                    <option value="internal">Internal Use</option>
                  </select>
                </div>
              </div>
              <div className="sm:flex sm:justify-center lg:justify-start mt-5 flex">
                <button className="btn mr-2" type="submit" name="submitstatus">
                  Create
                </button>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3"> */}
                  <button
                    onClick={resetForm}
                    id="job"
                    className="flex items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2  font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"
                  >
                    Reset
                  </button>
                {/* </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
