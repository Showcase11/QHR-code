import React, { useState, useEffect } from "react";
import Img1 from "../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import General from "./General";
import Payroll from "./Payroll";
import Documents from "./Documents";
import Dependends from "./Dependends";
import Job from "./Job";
import Layout from "../Layout";
import { useGlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
const Empprofile = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const [openTab, setOpenTab] = useState(1);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <Layout>
      {user && (
        <div className="w-full p-7 bg-zinc-100 grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-4 max-sm:grid-cols-1 gap-2">
          <div className="w-full flex flex-col p-3 bg-base-100 border">
            <div className="p-7 md:p-0 lg:p-0 max-sm:p-7 xl:p-7 flex flex-col items-start">
              <img
                src={
                  user?.image
                    ? user.image
                    : "https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png"
                }
                alt="profile"
                className="mask rounded-full object-cover w-28 h-28 mb-4"
              />
              <h1 className="font-bold mb-2">{user?.name}</h1>
              <select className="w-100 p-2 text-gray-500 border rounded-md mx-2 mb-5">
                <option>Active</option>
                <option>Onboarding</option>
                <option>proationary</option>
                <option>On leave</option>
              </select>

              <hr className="pb-5" />
              <div className="md:text-sm lg:text-base max-sm:text-sm ">
              <div className="flex">
                <IoMailOutline className="text-lg mr-2.5 mt-1 text-slate-500" />
                {user?.email}
              </div>
              <div className="flex">
                <IoCallOutline className="text-lg mr-2.5 mt-1 text-slate-500" />
                {user?.emergencyNumber}
              </div>
              <div className="pb-2 flex">
                <IoGlobeOutline className="text-lg mr-2.5 mt-1 text-slate-500" />
                GMT +07:00
              </div>
              </div>
              <hr className="pb-5" />
              <div className="dropdown pb-3">
                <label
                  tabIndex={0}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 pt-2.5 pb-2.5 pr-8 pl-3.5  font-bold text-white hover:bg-green-500 text-sm"
                >
                  Action <IoChevronDownSharp className="ml-2.5" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    {" "}
                    <label htmlFor="my-modal-3">Onboarding</label>
                  </li>
                  <li>
                    <label htmlFor="offboardemp">Offboarding</label>
                  </li>
                </ul>
              </div>

              <h2 className="text-gray-400">DEPARTMENT</h2>
              <div className="pb-4">{user?.department}</div>
              <h2 className="text-gray-400">OFFICE</h2>
              <div className="pb-4">Qurinom solutions</div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
              <General />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Empprofile;
