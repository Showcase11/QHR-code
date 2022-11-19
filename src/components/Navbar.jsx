import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle, BsPlusLg } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-500 px-8 text-white py-3">
=======
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle, BsPlusLg } from "react-icons/bs";
import Empprofile from './ManageEmployee/EmpProfile';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setUserDocument}  from '../store/Login/login.actions';


const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(setUserDocument())
    navigate('/login');
  }
  return (
    <div className="bg-sky-900 px-8 text-white py-3">
>>>>>>> master
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 items-center">
          <h1 className="font-bold text-2xl mr-4 font-roboto">QHR</h1>
          <div className="flex justify-center gap-5 items-center">
<<<<<<< HEAD
            {/* <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150" to="/checklist">Checklists</Link> */}
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Recuitment
            </Link>
            <Link
              className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
              to="/checklist"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Checklists
            </Link>
            {/* <a className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Checklists
            </a> */}
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Onboading
            </Link>
            <Link
              className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
              to="/employee"
            >
              Employees
            </Link>
            <Link
              to="/timeoff"
              className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
            >
              Time Off
            </Link>
            <Link
              to="/attendance/self"
              className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
            >
=======
                        <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Recuitment
            </Link>
            <Link
                className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                to="/checklist"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Checklists                 
              </Link>
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Onboading
            </Link>
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
            to="/employee"
            >
              Employees
            </Link>
            <Link to="/timeoff" className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Time Off
            </Link>
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
>>>>>>> master
              Attendance
            </Link>
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              Reports
            </Link>
            <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150">
              News
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center">
            <div className="bg-green-500  cursor-pointer rounded-full p-2 mr-3 hover:scale-110 transition-transform ease-in-out delay-75  ">
              <BsPlusLg className="text-xl" />
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex justify-center items-center gap-2 text-2xl">
=======
          <div className="flex justify-center items-center gap-2">
>>>>>>> master
            <BsQuestionCircle className="hover:scale-110 transition-transform ease-in-out delay-75 cursor-pointer" />

            <IoIosNotificationsOutline className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />

            <FiSettings className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />
<<<<<<< HEAD
            <div className="bg-green-500  cursor-pointer rounded-full p-1  relative hover:scale-110 transition-transform ease-in-out delay-75">
              <img
                src="https://png.pngtree.com/png-clipart/20211009/original/pngtree-mens-cartoon-face-cleaning-png-image_6843354.png"
                alt="person"
                className="h-[25px] w-full"
              />
            </div>
=======
            <div className="dropdown dropdown-end">
  {/* <label > */}
  <div tabIndex={0} className="avatar">
    <div className="w-12 rounded-full cursor-pointer">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
              {/* </label> */}
  <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-80 text-black">
  <div className="card-body items-center text-center">
  <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
    <Link to='/profile' className="font-bold">Sukanya B</Link>
    <h6 className="text-slate-400">sukanya@qurinomsolutions.com</h6>
    <Link to='/changepassword'>Change Password</Link>
    <Link onClick={onSubmit}>Log out</Link>
  </div>
  </ul>
</div>
>>>>>>> master
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
