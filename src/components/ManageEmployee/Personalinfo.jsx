import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";

const Personaliinfo = ({ setInfo }) => {
  const { setLoading, saveUser, user, url } = useGlobalContext();

  const [formData, setFormData] = useState({
    name: user?.name,
    age: user?.age,
    country: user?.country,
    gender: user.gender,
    email: user.email,
    emergencyNumber: user.emergencyNumber,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(`${url}/employee/${user._id}`, formData);
      toast.success("Data Updated");

      saveUser(res.data.data);
      setInfo(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div class="flex flex-col justify-center">
  <div class="relative">
  <form onSubmit={handleSubmit}>
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 pb-3">
      <div class="relative">
      <div className="form-group">
                    <label
                      for="firstname"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label
                      for="dob"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="age"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label
                      for="nationality"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="countrty"
                    ></input>
                  </div>
      </div>
      <div class="">
      <div className="form-group">
                    <label
                      for="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="email"
                    ></input>{" "}
                  </div>
                  <div className="form-group">
                    <label
                      for="gender"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="gender"
                    ></input>
                  </div>
                  <div className="form-group pb-3">
                    <label
                      for="phonenumber"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="emergencyNumber"
                      onChange={handleChange}
                      value={formData.emergencyNumber}
                      className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                      id="emergencyNumber"
                    ></input>
                  </div>
      </div>
    </div>
    <div className="flex gap-2 justify-start items-center">
                 <button
                   type="submit"
                   className="btn btn-sm btn-info capitalize"
                 >
                   Submit
                 </button>
                 <button
                   onClick={() => setInfo(false)}
                   className="btn btn-error btn-sm capitalize"
                 >
                   cancel
              </button>
               </div>
               </form>
  </div>
</div>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-4">
      //       <form onSubmit={handleSubmit}>
      //         <div className="flow-root">
      //           <div className="float-left w-[49%] pr-5">
      //             <div className="form-group">
      //               <label
      //                 for="firstname"
      //                 className="block text-sm font-semibold text-gray-800"
      //               >
      //                 Name
      //               </label>
      //               <input
      //                 type="text"
      //                 name="name"
      //                 value={formData.name}
      //                 onChange={handleChange}
      //                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //                 id="name"
      //               ></input>
      //             </div>
      //             <div className="form-group">
      //               <label
      //                 for="dob"
      //                 className="block text-sm font-semibold text-gray-800"
      //               >
      //                 Age
      //               </label>
      //               <input
      //                 type="text"
      //                 name="age"
      //                 value={formData.age}
      //                 onChange={handleChange}
      //                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //                 id="age"
      //               ></input>
      //             </div>
      //             <div className="form-group">
      //               <label
      //                 for="nationality"
      //                 className="block text-sm font-semibold text-gray-800"
      //               >
      //                 Nationality
      //               </label>
      //               <input
      //                 type="text"
      //                 name="country"
      //                 value={formData.country}
      //                 onChange={handleChange}
      //                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //                 id="countrty"
      //               ></input>
      //             </div>
      //           </div>
      //           <div className="float-left w-[49%]">
      //             <div className="form-group">
      //               <label
      //                 for="email"
      //                 className="block text-sm font-semibold text-gray-800"
      //               >
      //                 Email Address
      //               </label>
      //               <input
      //                 type="email"
      //                 name="email"
      //                 onChange={handleChange}
      //                 value={formData.email}
      //                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //                 id="email"
      //               ></input>{" "}
      //             </div>
      //             <div className="form-group">
      //               <label
      //                 for="gender"
      //                 className="block text-sm font-semibold text-gray-800"
      //               >
      //                 Gender
      //               </label>
      //               <input
      //                 type="text"
      //                 name="gender"
      //                 value={formData.gender}
      //                 onChange={handleChange}
      //                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //                 id="gender"
      //               ></input>
      //             </div>
      //             <div className="form-group pb-3">
      //               <label
      //                 for="phonenumber"
      //                 className="block text-sm font-semibold text-gray-800"
      //               >
      //                 Phone Number
      //               </label>
      //               <input
      //                 type="number"
      //                 name="emergencyNumber"
      //                 onChange={handleChange}
      //                 value={formData.emergencyNumber}
      //                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //                 id="emergencyNumber"
      //               ></input>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="flex gap-2 justify-start items-center">
      //           <button
      //             type="submit"
      //             className="btn btn-sm btn-info capitalize"
      //           >
      //             Submit
      //           </button>
      //           <button
      //             onClick={() => setInfo(false)}
      //             className="btn btn-error btn-sm capitalize"
      //           >
      //             cancel
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
  );
};

export default Personaliinfo;
