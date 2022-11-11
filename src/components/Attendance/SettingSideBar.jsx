import React from "react";
import { useNavigate } from "react-router-dom";

const SettingSideBar = ({ selected }) => {
  const navigate = useNavigate();
  return (
    <div className="basis-1/3 border-r-[2px] py-4 border-gray-300">
      <h1 className=" px-5 text-xl my-3 font-bold font-['Poppins'] tracking-wider">
        Settings
      </h1>
      <div className="flex gap-3 flex-col">
        <h2
          className={`text-md text-gray-500 hover:border-l-[3px]  transition-all ease-in duration-100 transition-smooth cursor-pointer  font-semibold pl-5 ${
            selected === "general" &&
            "border-green-500 border-l-[3px] bg-gray-100 "
          }  py-2`}
          onClick={() => navigate("/attendance/settings/general")}
        >
          General
        </h2>
        <h2
          className={`text-md text-gray-500 hover:border-l-[3px]  transition-all ease-in duration-100 transition-smooth cursor-pointer  font-semibold pl-5 ${
            selected === "location" &&
            "border-green-500 border-l-[3px] bg-gray-100 "
          }  py-2`}
          onClick={() => navigate("/attendance/settings/location")}
        >
          Locations and Policies
        </h2>
        <h2
          className={`text-md text-gray-500 hover:border-l-[3px]  transition-all ease-in duration-100 transition-smooth cursor-pointer  font-semibold pl-5 ${
            selected === "qrcode" &&
            "border-green-500 border-l-[3px] bg-gray-100 "
          }  py-2`}
          onClick={() => navigate("/attendance/settings/qrcode")}
        >
          QR Code
        </h2>
      </div>
    </div>
  );
};

export default SettingSideBar;
