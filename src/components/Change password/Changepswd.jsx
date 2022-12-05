import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "../../components";
import Lottie from "react-lottie";
import animationData from "../../assets/change.json";
import { useGlobalContext } from "../../context/context";
import axios from "axios";
import { useEffect } from "react";

const Changepswd = () => {
  const { password, user, setPassword, url } = useGlobalContext();
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must and should match"),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, reset, formState } = useForm(validationOpt);

  const { errors } = formState;

  const navigate = useNavigate();

  const onFormSubmit = async (data) => {
    console.log(JSON.stringify(data, null, 4));
    try {
      const res = await axios.put(`${url}/employee/${user._id}`, {
        password: data.password,
      });
      console.log(res);
      setPassword(res.data);
      localStorage.setItem("password", JSON.stringify(res.data));
      toast.success("password updated SuccessFully");
      navigate("/profile");
    } catch (e) {
      console.log(e);
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
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
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
      <div className=" flex items-center justify-center h-screen">
        <div className="relative items-stretch flex w-[60%] border-[1px] border-gray-200 shadow-lg bg-white justify-center overflow-hidden">
          <div className="flex-1">
            <Lottie options={defaultOptions} height={390} />
          </div>
          <div className="w-full flex-1 p-6 bg-gradient-to-r from-green-300 to-green-50 px-8  lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-black  underline">
              Reset Password
            </h1>
            <form onSubmit={handleSubmit(onFormSubmit)} className="mt-8">
              <div className="my-5 w-full">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  {...register("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                  className={`block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
                    errors.password ? "border-red-500" : "border-borderClr"
                  }`}
                />
                <p className="text-red-500">{errors.password?.message}</p>
              </div>
              <div className="form-group">
                <label
                  for="confirmPassword"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Cofirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  className={`block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-borderClr"
                  }`}
                />
                <p className="text-red-500">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              <button
                type="primary"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
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

export default Changepswd;
