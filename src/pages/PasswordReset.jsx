import React from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import toast, { Toaster } from "react-hot-toast";
import animationData from "../assets/security.json";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
const initialState = {
  password: "",
  confirmPassword: "",
};
const PasswordReset = () => {
  const navigate = useNavigate();
  const { url } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const params = useParams();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.put(
        `${url}/employee/resetpassword/${params.resetId}`,
        {
          password: formData.password,
        }
      );
      toast.success("Password updated successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className=" flex items-center justify-center h-screen">
        <div className="relative items-stretch flex w-[60%] xs:w-[80%] sm:w-[98%] md:w-[85%] lg:w-[60%] border-[1px] border-gray-200 shadow-lg bg-white justify-center overflow-hidden">
          <div className="flex-1 xs:hidden sm:hidden md:block max-sm:block lg:block">
            <Lottie options={defaultOptions} />
          </div>
          <div className="w-full flex-1 p-6 bg-gradient-to-r from-sky-300 to-sky-50 px-8  lg:max-w-xl">
            <h1 className="text-3xl xs:text-xl sm:text-2xl font-semibold text-center text-black  underline">
              Reset your password
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 items-center justify-center flex-col pt-11"
            >
              <input
                type="password"
                className="input input-bordered w-full max-w-md mb-3"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <input
                type="password"
                className="input input-bordered w-full max-w-md"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PasswordReset;
