import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useGlobalContext } from "../context/context";
import ProfileData from "./ProfileData";

const Profile = () => {
  const navigate = useNavigate();
  const { setLoading, saveUser, user } = useGlobalContext();
  const [picture, setPicture] = useState("");
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("file", picture);
    try {
      setLoading(true);
      const res = await axios.put(
        `http://localhost:5000/api/employee/${user._id}`,
        {
          age: data.age,
          address: data.address,
          gender: data.gender,
          // profilepic: data.profilepic,
          accountNumber: data.accountNumber,
          ifscCode: data.ifscCode,
          country: data.country,
          emergencyNumber: data.emergencyNumber,
          isVisited: true,
        }
      );

      setLoading(false);

      saveUser(res.data.data);

      toast.success("Data Saved successfully");
      navigate("/");
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="shadow bg-base-100 rounded-box w-2/4 p-7 mt-10 m-auto content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flow-root">
            <div className="float-left w-[49%]">
              <div className="mb-2">
                <label
                  for="age"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  {...register("age", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                  placeholder="Enter your age..."
                />
              </div>
              <div className="mb-2">
                <label
                  for="Address"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  {...register("address", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                  placeholder="Enter your Address..."
                />
              </div>
              <div className="mb-2">
                <label
                  for="gender"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  className="block w-full px-4 py-2 mt-2 text-grey-700 bg-white border rounded-md"
                  {...register("gender", { required: true })}
                >
                  <option value="select">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* <div className="mb-2">
                        <label
                            for="profilepic"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Profile Image
                        </label>
                        <input 
                        id="profilePic"
                        type="file" 
                        name="profilepic"
                        {...register("profilepic", { required: true })}
                        onChange={onChangePicture}/>
                        <div className="pt-5" >
                            <img className="w-40 h-30"  src={picture} alt='img' />
                        </div>
                    </div> */}
            </div>
            <div className="float-right w-[49%]">
              <div className="mb-2">
                <label
                  for="accountNumber"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  {...register("accountNumber", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                  placeholder="Enter your Account Number..."
                />
              </div>
              <div className="mb-2">
                <label
                  for="ifscCode"
                  className="block text-sm font-semibold text-gray-800"
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  {...register("ifscCode", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                  placeholder="Enter your IFSC Code..."
                />
              </div>
              <div className="mb-2">
                <label
                  for="country"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  {...register("country", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                  placeholder="Enter your Country..."
                />
              </div>
              <div className="mb-2">
                <label
                  for="emergencyNumber"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Emergency
                </label>
                <input
                  type="text"
                  name="emergencyNumber"
                  {...register("emergencyNumber", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                  placeholder="Enter your Emergency Number..."
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="justify-center flex justify-center py-2 px-4 border border-transparent m-auto text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-10"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
