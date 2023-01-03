import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Address = ({ setAddress }) => {
  const { setLoading, saveUser, user, url } = useGlobalContext();
  const [formData, setFormData] = useState({
    address: user?.address,

    country: user?.country,
    pincode: user?.pincode,
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
      setAddress(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flow-root">
          <div className="float-left w-[49%]">
            <div className="mb-2">
              <label
                for="firstname"
                className="block text-sm font-semibold text-gray-800"
              >
                Primary Address
              </label>
              <textarea
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                placeholder="First Name"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                for="lastname"
                className="block text-sm font-semibold text-gray-800"
              >
                Country
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                placeholder="Last Name"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                for="dob"
                className="block text-sm font-semibold text-gray-800"
              >
                Pincode
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                name="pincode"
                required
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center">
          <button type="submit" className="btn btn-sm btn-info capitalize">
            Submit
          </button>
          <button
            onClick={() => setAddress(false)}
            className="btn btn-error btn-sm capitalize"
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
