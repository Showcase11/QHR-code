import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setForgotUserDocument}  from '../../store/Forgot/forgot.actions';


const Forgot = () => {
    const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Please enter a valid email")
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
    
      const onSubmit = async (data) => {
        console.log(data);
        dispatch(setForgotUserDocument(data))
        navigate('/');
      }
    return (
        <div className='bg-zinc-100'>
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                  <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                     Forgot
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
        <button type="primary" className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10'>Submit</button>
          </form>
  </div>
  </div>
  </div>
    );
};

export default Forgot;