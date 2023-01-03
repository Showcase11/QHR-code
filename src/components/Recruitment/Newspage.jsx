import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import toast from "react-hot-toast";
const Newspage = () => {
  const { setLoading, url, fetchNewsData, loading } = useGlobalContext();
  const initialState = { 
    title: "", 
    postBy:"",
    content:""
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const Newspage = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const res = await axios.post(`${url}/news`,formData);
      console.log(res.data);
      setLoading(false);
      toast.success("News Added Successfully");
      fetchNewsData ();
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
          <h3 className="text-lg font-bold">News</h3>
          <div className="py-4">
            <form onSubmit={Newspage}>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="title"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="block w-full px-19 py-2 mt-8 bg-white border rounded-md"
                    id="title"
                  ></input>
                </div>
                <div className="flow-root">
                  <div className="form-group pb-3">
                  <label
                    for="postBy"
                    className="block text-sm font-semibold text-gray-800"
                  >
                  PostBy
                  </label>
                  <input
                    type="text"
                    name="postBy"
                    required
                    value={formData.postBy}
                    onChange={handleChange}
                    className="block w-full px-19 py-2 mt-8 bg-white border rounded-md"
                    id="postBy"
                  ></input>
                  </div>
                </div>
                  <div  className="flow-root">
                  <div className="form-group pb-3">
                   <label
                      for="content"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Content
                    </label>
                    <input
                    type="text"
                    name="content" 
                    required
                    value={formData.content}
                    onChange={handleChange}
                    className="block w-full px-19 py-32 mt-8 bg-white border rounded-md"
                    id="content"
                  ></input>
               </div>
             </div>
             <div className="sm:flex sm:justify-center lg:justify-start mt-5" >
              <button className=" btn " type="submit" name="submitstatus">
                  Create
                   </button>
                   <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={resetForm}
                    id="News"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2  font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"
                  >
                    Reset
                  </button>
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
export default Newspage;
