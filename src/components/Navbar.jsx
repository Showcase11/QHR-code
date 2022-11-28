import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle, BsPlusLg } from "react-icons/bs";
import Empprofile from "./ManageEmployee/empprofile";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();
  const onSubmit = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };
  // console.log(user);
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-300 px-8 text-white py-3">
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 items-center">
          <Link to="/" className="font-bold text-2xl mr-4 font-roboto">
            QHR
          </Link>
          {user && (
            <div className="flex justify-center gap-5 items-center">
              {/* <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150" to="/checklist">Checklists</Link> */}

              {user?.isAdmin && (
                <>
                  <Link
                    to="/dashboard"
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/departments"
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                  >
                    Departments
                  </Link>
                  <Link
                    to="/employees"
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                  >
                    Employees
                  </Link>
                  <Link
                    to="/leaveAdmin"
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                  >
                    Leaves
                  </Link>
                </>
              )}
              {!user?.isAdmin && (
                <>
                  <Link
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                    to="/leave"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Leaves
                  </Link>
                  <Link
                    to="/attendance/self"
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                  >
                    Attendance
                  </Link>

                  <Link
                    to="/news"
                    className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                  >
                    News
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center">
            {user && (
              <div className="bg-green-500  cursor-pointer rounded-full p-2 mr-3 hover:scale-110 transition-transform ease-in-out delay-75  ">
                <BsPlusLg className="text-xl" />
              </div>
            )}
          </div>

          {user ? (
            <div className="flex justify-center items-center gap-2">
              <BsQuestionCircle className="hover:scale-110 transition-transform ease-in-out delay-75 cursor-pointer" />

              <IoIosNotificationsOutline className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />

              <FiSettings className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />
              <div className="dropdown dropdown-end">
                {/* <label > */}

                <div tabIndex={0} className="avatar">
                  <div className="w-12 rounded-full cursor-pointer">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                {/* </label> */}
                <ul
                  tabIndex={0}
                  className="dropdown-content p-2 shadow bg-base-100 rounded-box w-80 text-black"
                >
                  <div className="card-body items-center text-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <Link to="/profile" className="font-bold">
                      {user.name}
                    </Link>
                    <h6 className="text-slate-400">{user.email}</h6>
                    <Link to="/changepassword">Change Password</Link>
                    <Link onClick={onSubmit}>Log out</Link>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <button className="btn px-6 font-semibold tracking-wider btn-primary  btn-sm">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
