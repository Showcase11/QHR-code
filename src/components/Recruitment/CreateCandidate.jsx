import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import toast from "react-hot-toast";
const CreateCandidate = () => {
  const { setLoading, url, fetchJobData, imageLink, uploadImage,JobData, loading } = useGlobalContext();
  
  
  const initialState = {
    
    name: "", 
    image: "",
    email: "",
    phoneNumber: "",
    resume: "",
    job: "",
    gender:"",
    
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const CreateCandidate = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const res = await axios.post(`${url}/candidate`, formData);
      console.log(res.data);
      setLoading(false);
      toast.success("Candidate Added Successfully");
      fetchJobData();
    } catch (error) {
      console.log(error)
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
          <h3 className="text-lg font-bold">New Candidate</h3>
          <div className="py-4">
            <form onSubmit={CreateCandidate}>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required="true"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    id="name"
                  ></input>
                </div>
                
              <diV className="flow-root">
              <div className="form-group pb-3">
              <label
                    for="image"
                    className="block text-sm font-semibold text-gray-800"
                  >
                  Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    required
                    value={formData.image}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    id="image"
                  ></input>
                </div>
              </diV>
            <div className="flow-root">
            <div className="form-group pb-3">
              <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                  Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    required="true"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    id="email"
                  ></input>
                </div>
               </div>
               <div className="flow-root">
                <div className="form-group pb-3">
                <label
                    for="phoneNumber"
                    className="block text-sm font-semibold text-gray-800"
                  >
                  Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    required="true"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    id="phoneNumber"
                  ></input>
                  <div className="flow-root">
                  <div className="form-group pb-3">
                   <label
                      for="job"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Job
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      placeholder="Select Template"
                      value={formData.job}
                      onChange={handleChange}
                      id="job"
                      type="text"
                      required ="true"
                      name="job"
                    >
                      <option value="">Hr</option>
                      <option value="contract">Contractor</option>
                      <option value="freecenler">Freelancer</option>
                      <option value="fte">Full-time</option>
                      <option value="intern">Intern</option>
                      <option value="partTime">Part-time</option>
                    </select>
                  </div>
                  </div>
                   <div className="flow-root" >
                   <div className="form-group pb-3">
                   <label
                      for="gender"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Gender
                    </label>
                    <select
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      placeholder="Select Template"
                      value={formData.gender}
                      onChange={handleChange}
                      id="gender"
                      type="text"
                      required="true"
                      name="gender"
                    >
                      <option value="">Female</option>
                      <option value="contract">Male</option>
                      
                    </select>
                    </div>
                   </div>
                  <div  className="flow-root">
                  <div className="form-group pb-3">
                   <label
                      for="resume"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Resume
                    </label>
                   <input 
                  type="file" 
                 name="resume"
                required
               value={formData.file}
                onChange={handleChange}
               className="file-input w-full max-w-xs"
               id="name">
             </input>
               </div>
             </div>
             <div className="sm:flex sm:justify-center lg:justify-start mt-5" >
              <button className=" btn " type="submit" name="submitstatus">
                  Create
                   </button>
                   <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={resetForm}
                    id="candidae"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2  font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"
                  >
                    Reset
                  </button>
                </div>
                  </div>
                </div>
               </div>
              </div>
            </form>

           </div>
          </div>
        </div>
        </div>
    
    
    
    
  );
};

export default CreateCandidate;
