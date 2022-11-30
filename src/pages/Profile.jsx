import React, {useState} from 'react';
import { Layout } from "../components";
// import { useGlobalContext } from "../context/context";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';

const Profile = () => {

    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
      console.log(e.target.files[0]);
      setPicture(URL.createObjectURL(e.target.files[0]));
    };   
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  
    const onSubmit = (data) => {
      console.log(data);
      setData(data);
      navigate("/ProfileData");
    }   
    return (
        <Layout>
        <div className="shadow bg-base-100 rounded-box w-2/4 p-7 mt-10 m-auto content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className='flow-root'>
  <div className='float-left w-[49%]'>
  <div className="mb-2">
                        <label
                            for="employeeid"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Age
                        </label>
                        <input
                            type="text"
                            name="age"
                            {...register("age", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                            placeholder='Enter your age...'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="date"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            {...register("address", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                            placeholder='Enter your Address...'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="enddate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Gender
                        </label>
                        <select
                        name="gender"
                        className="block w-full px-4 py-2 mt-2 text-grey-700 bg-white border rounded-md" 
                        {...register("gender", { required: true })}>
                                <option value="select">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="enddate"
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
                <img className="w-40 h-30"  src={picture} />
              </div>
                    </div>
  </div>
  <div className='float-right w-[49%]'>
                    <div className="mb-2">
                        <label
                            for="joindate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Account Number
                        </label>
                        <input
                            type="text"
                            name="accountNumber"
                            {...register("accountNumber", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                            placeholder='Enter your Account Number...'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="joindate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           IFSC Code
                        </label>
                        <input
                            type="text"
                            name="ifscCode"
                            {...register("ifscCode", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                            placeholder='Enter your IFSC Code...'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="joindate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            {...register("country", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                            placeholder='Enter your Country...'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="probation date"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Emergency
                        </label>
                        <input
                            type="text"
                            name="emergencyNumber"
                            {...register("emergencyNumber", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400"
                            placeholder='Enter your Emergency Number...'
                        />
                    </div>
  </div>
  </div>
  <button type="submit" className="justify-center flex justify-center py-2 px-4 border border-transparent m-auto text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-10">
      Submit
  </button>
</form>
      </div>
      </Layout>
    )
}

export default Profile;