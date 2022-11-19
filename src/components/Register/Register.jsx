import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { setRegisterDocument } from "../../store/Register/register.actions";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState([]);
  // const schema = Yup.object().shape({
  //     name: Yup.string()
  //       .required("username is required")
  //       .maxLength(20, "Value must be maximum 20")
  //       .minLength(2, "Value must be minimum 2"),
  //     email: Yup.string()
  //       .required("Email is required")
  //       .email("Please enter a valid email"),
  //     password: Yup.string()
  //       .required("Password is required")
  //       .min(6, "Password must be at least 6 characters"),
  //     confirmpassword: Yup.string()
  //       .required("Password is required")
  //       .min(6, "Password must be at least 6 characters"),
  //   });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/employee/signup",
        {
          name: data.name,
          email: data.email,
          password: data.password,
          isAdmin: true,
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }

    navigate("/signIn");
  };

  // const onSubmit = async (data) => {
  //   console.log(data);
  //   axios.post("localhost:5000/api/employee/signup", data)
  // .then((response) => response.json())
  // .then((json) => {
  //   console.log(json);
  // });
  //   dispatch(setRegisterDocument(data))
  //   navigate('/')
  // }
  return (
    <div className="bg-zinc-100">
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center">
            Signup to create an account
          </h1>
          <p className="mt-8 text-lg font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:underline"
            >
              Login
            </Link>
          </p>
          {data ? (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="my-5 w-full">
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("name", {
                    required: true,

                    minLength: 4,
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className="errorMsg">username is required.</p>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <p className="errorMsg">
                    username should be min 4 characters and max 20 characters.
                  </p>
                )}
              </div>
              <div className="my-5 w-full">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Email is not valid.</p>
                )}
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
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
                    minLength: 6,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg">Password is required.</p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="errorMsg">
                    Password should be 8 characters length, 2 letters in Upper
                    Case, 1 Special Character (!@#$&*), atleast 2 numbers,3
                    letters in Lower Case.
                  </p>
                )}
              </div>
              <div className="my-5 w-full">
                <label
                  for="confirmpassword"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("confirmpassword", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
                    minLength: 6,
                  })}
                />
                {errors.confirmpassword &&
                  errors.confirmpassword.type === "required" && (
                    <p className="errorMsg">Password is required.</p>
                  )}
                {errors.confirmpassword &&
                  errors.confirmpassword.type === "pattern" && (
                    <p className="errorMsg">
                      Password should be 8 characters length, 2 letters in Upper
                      Case, 1 Special Character (!@#$&*), atleast 2 numbers,3
                      letters in Lower Case.
                    </p>
                  )}
              </div>
              <button
                type="primary"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              >
                Signup
              </button>
            </form>
          ) : (
            "their is no result here"
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
