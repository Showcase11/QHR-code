import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setUserDocument}  from '../../store/Login/login.actions';
import axios from 'axios';

const Signin = () => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = async(data) =>{
    console.log(data);
              try {
                const res = await axios.post("http://localhost:5000/api/employee/signin", {
                  email: data.email,
                  password: data.password, 
                  isAdmin: true
                })
               console.log(res);
              } catch (e) {
                  console.log(e);
              }
              dispatch(setUserDocument(data))
              navigate('/')
            }

    return (
      <div className='bg-zinc-100'>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                   Sign in
                </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
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
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link to="/forgot" className="font-medium text-grey-600 hover:text-black-500">
            Forgot your password?
          </Link>
        </div>
      </div>
      <button type="primary" className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10'>Sign in</button>
        </form>
        <div className="toast toast-start toast-middle">
  <div className="alert alert-info">
    <div>
      <span>New mail arrived.</span>
    </div>
  </div>
  <div className="alert alert-success">
    <div>
      <span>Message sent successfully.</span>
    </div>
  </div>
</div>
        <p className="mt-8 text-lg font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
</div>
</div>
</div>
    );
};

export default Signin;