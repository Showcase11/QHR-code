import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle, BsPlusLg } from "react-icons/bs";
import Empprofile from "./ManageEmployee/empprofile";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/context";
const Navbar = () => {
  const { user, removeUser } = useGlobalContext();
  const navigate = useNavigate();
  const onSubmit = () => {
    removeUser();
    navigate("/");
  };
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full shadow bg-gradient-to-r from-indigo-800 to-indigo-300">
            <div className="px-4 md:items-center md:flex md:px-8">
                    <div className="flex items-center py-3 md:py-5 md:block">
                    <Link to="/" className="font-bold text-2xl mr-4 font-roboto text-white">
                           QHR
                    </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                </div>
                {/* <div> */}
                    <div className={`flex-1 pb-3 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      {user && (
             <div className="flex justify-center gap-5 items-center">
                        <ul className="items-center justify-center space-y-3 md:flex md:space-x-6 md:space-y-0">
                        {user?.isAdmin && (
                          <>
                          <li>
                        <Link
                     to="/dashboard"
                     className="text-white hover:text-indigo-200 font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     Dashboard
                   </Link>
                   </li>
                   <li>
                   <Link
                     to="/departments"
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     Departments
                   </Link>
                   </li>
                   <li>
                   <Link
                     to="/employees"
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     Employees
                   </Link>
                   </li>
                   <li>
                   <Link
                     to="/leaveAdmin"
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     Leaves
                   </Link>
                   </li>
                   <li>
                   <Link
                     to="/attendanceAdmin"
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     Attendances
                   </Link>
                   </li>
                   </>
                        )}
                        {!user?.isAdmin && (
                 <>
                 <li>
                   <Link
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                     to="/leave"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                   >
                     Leaves
                   </Link>
                   </li>
                   <li>
                   <Link
                     to="/attendance/self"
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     Attendance
                   </Link>
                   </li>
                   <li>
                   <Link
                     to="/news"
                     className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   >
                     News
                   </Link>
                   </li>
                 </>
               )}
               {user?.department === "HR" && (
                <li>
                 <Link
                   className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
                   to="/recruitment/jobs"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                 >
                   Recruitment
                 </Link>
                 </li>
               )}
                        </ul>
                        </div>
                      )}
                    </div>
                {/* </div> */}
                <div className="flex justify-end items-center gap-4">
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
                     <img
                     alt="img"
                       src={`${
                         user?.image
                           ? user.image
                          : "https://placeimg.com/192/192/people"
                       }`}
                       className="object-cover"
                     />
                   </div>
                 </div>
                 {/* </label> */}
                 <ul
                   tabIndex={0}
                   className="dropdown-content p-2 shadow bg-base-100 rounded-box w-80 text-black"
                 >
                   <div className="card-body items-center text-center">
                     <div className="avatar">
                       <div
                         className="w-24 rounded-full cursor-pointer"
                         onClick={() => navigate("/profile")}
                       >
                        <img
                           alt="img"
                           src={`${
                             user?.image
                               ? user.image
                               : "https://placeimg.com/192/192/people"
                          }`}
                           className="object-cover"
                         />
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
            
        </nav>
    // <div className="bg-gradient-to-r from-indigo-800 to-indigo-300 px-8 text-white py-3">
    //   <div className="flex justify-between items-center">
    //     <div className="flex justify-center gap-2 items-center">
    //       <Link to="/" className="font-bold text-2xl mr-4 font-roboto">
    //         QHR
    //       </Link>
    //       {user && (
    //         <div className="flex justify-center gap-5 items-center">
    //           {/* <Link className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150" to="/checklist">Checklists</Link> */}

    //           {user?.isAdmin && (
    //             <>
    //               <Link
    //                 to="/dashboard"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 Dashboard
    //               </Link>
    //               <Link
    //                 to="/departments"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 Departments
    //               </Link>
    //               <Link
    //                 to="/employees"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 Employees
    //               </Link>
    //               <Link
    //                 to="/leaveAdmin"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 Leaves
    //               </Link>
    //               <Link
    //                 to="/attendanceAdmin"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 Attendances
    //               </Link>
    //             </>
    //           )}
    //           {!user?.isAdmin && (
    //             <>
    //               <Link
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //                 to="/leave"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 Leaves
    //               </Link>
    //               <Link
    //                 to="/attendance/self"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 Attendance
    //               </Link>

    //               <Link
    //                 to="/news"
    //                 className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               >
    //                 News
    //               </Link>
    //             </>
    //           )}
    //           {user?.department === "HR" && (
    //             <Link
    //               className="font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-100 transition-all ease-out duration-150"
    //               to="/recruitment/jobs"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Recruitment
    //             </Link>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //     <div className="flex justify-between items-center gap-4">
    //       <div className="flex justify-center">
    //         {user && (
    //           <div className="bg-green-500  cursor-pointer rounded-full p-2 mr-3 hover:scale-110 transition-transform ease-in-out delay-75  ">
    //             <BsPlusLg className="text-xl" />
    //           </div>
    //         )}
    //       </div>

    //       {user ? (
    //         <div className="flex justify-center items-center gap-2">
    //           <BsQuestionCircle className="hover:scale-110 transition-transform ease-in-out delay-75 cursor-pointer" />

    //           <IoIosNotificationsOutline className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />

    //           <FiSettings className=" cursor-pointer hover:scale-110 transition-transform ease-in-out delay-75" />
    //           <div className="dropdown dropdown-end">
    //             {/* <label > */}

    //             <div tabIndex={0} className="avatar">
    //               <div className="w-12 rounded-full cursor-pointer">
    //                 <img
    //                   src={`${
    //                     user?.image
    //                       ? user.image
    //                       : "https://placeimg.com/192/192/people"
    //                   }`}
    //                   className="object-cover"
    //                 />
    //               </div>
    //             </div>
    //             {/* </label> */}
    //             <ul
    //               tabIndex={0}
    //               className="dropdown-content p-2 shadow bg-base-100 rounded-box w-80 text-black"
    //             >
    //               <div className="card-body items-center text-center">
    //                 <div className="avatar">
    //                   <div
    //                     className="w-24 rounded-full cursor-pointer"
    //                     onClick={() => navigate("/profile")}
    //                   >
    //                     <img
    //                       alt="img"
    //                       src={`${
    //                         user?.image
    //                           ? user.image
    //                           : "https://placeimg.com/192/192/people"
    //                       }`}
    //                       className="object-cover"
    //                     />
    //                   </div>
    //                 </div>
    //                 <Link to="/profile" className="font-bold">
    //                   {user.name}
    //                 </Link>
    //                 <h6 className="text-slate-400">{user.email}</h6>
    //                 <Link to="/changepassword">Change Password</Link>
    //                 <Link onClick={onSubmit}>Log out</Link>
    //               </div>
    //             </ul>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="flex gap-3 items-center">
    //           <button className="btn px-6 font-semibold tracking-wider btn-primary  btn-sm">
    //             <Link to="/login">Login</Link>
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
