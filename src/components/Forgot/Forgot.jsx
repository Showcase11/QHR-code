import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { Layout } from "../../components";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import Lottie from "react-lottie";
import img1 from "../../Images/nest_forgot_password_dribbble.gif";

const Forgot = () => {
  const { setForgot, url } = useGlobalContext();
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${url}/employee/forgetpassword`, {
        email: data.email,
      });
      toast.success("Email will be send to you with a link");
      console.log(res.data);
      setForgot(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <Layout>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
          },
        }}
      />
    <div className="flex items-center justify-center h-screen">
    <div className="relative items-stretch flex w-[60%] sm:w-[98%] md:w-[80%] lg:w-[60%] border-[1px] border-gray-200 shadow-lg bg-white justify-center overflow-hidden">
      <div className="flex-1 xs:hidden sm:hidden md:block max-sm:block lg:block">
        <img src={img1} className='w-full h-full' alt='img' height={390} />
      </div>
      <div className="flex-1 p-6 px-8 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black  underline">
          Forgot
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="my-5 w-full">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className={`block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
                  errors.email ? "border-red-500" : "border-borderClr"
                }`}
                placeholder="Email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <button
              type="primary"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            >
              Submit
            </button>
          </form>
      </div>
    </div>
  </div>
  </Layout>
  );
};

export default Forgot;
