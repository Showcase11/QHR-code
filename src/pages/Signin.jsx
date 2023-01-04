import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import animationData from "../assets/signin.json";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { Layout } from "../components";
import Lottie from "react-lottie";
import toast, { Toaster } from "react-hot-toast";
const Signin = () => {
  const { saveUser, user, url } = useGlobalContext();
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
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
      const res = await axios.post(`${url}/employee/signin`, {
        email: data.email,
        password: data.password,
      });
      console.log(res);
      saveUser(res.data.user);
      // setUser(res.data);
      // localStorage.setItem("user", JSON.stringify(res.data));
      // toast.success("Login SuccessFully");
      console.log(user);

      navigate("/");
    } catch (e) {
      console.log(e);
      // toast(e?.response?.data?.message, {
      //   style: { color: "white", backgroundColor: "red" },
      //   icon: "👏",
      // });
      toast.error(e?.response?.data?.message);
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
        <div className="relative items-stretch flex w-[60%] xs:w-[90%] sm:w-[98%] md:w-[85%] lg:w-[85%] xl:w-[60%] border-[1px] border-gray-200 shadow-lg bg-white justify-center overflow-hidden">
          <div className="flex-1 xs:hidden sm:hidden max-sm:block lg:block">
            <Lottie options={defaultOptions} height={390} />
          </div>
          <div className="flex-1 p-6 m-auto bg-gradient-to-r from-indigo-200 to-indigo-50 px-8 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-black  underline">
              Sign in
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
              <div className="my-5 w-full">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className={`block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
                    errors.password ? "border-red-500" : "border-borderClr"
                  }`}
                  placeholder="Password"
                  {...register("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                <p className="text-red-500">{errors.password?.message}</p>
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm xs:pl-10 sm:pl-8">
                  <Link
                    to="/forgot"
                    className="font-medium text-grey-600 hover:text-black-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button
                type="primary"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
