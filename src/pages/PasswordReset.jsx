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
      <div className="flex items-center h-full my-12 justify-center flex-col">
        <div className="flex items-center w-[600px] gap-0">
          <div className="flex-1 h-full">
            <Lottie options={defaultOptions} />
          </div>
          <div className="flex-1 px-5 py-2 ">
            <h1 className="text-xl font-roboto my-5 text-center">
              Reset your password
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 items-center justify-center flex-col"
            >
              <input
                type="password"
                className="input input-bordered  w-full max-w-xs"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <input
                type="password"
                className="input input-bordered  w-full max-w-xs"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <button className="btn btn-square w-full my-5 btn-sm">
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
