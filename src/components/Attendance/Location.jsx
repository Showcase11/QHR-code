import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import SettingLayout from "./SettingLayout";
import SettingSideBar from "./SettingSideBar";
const data = [
  {
    title: "Web App",
    actions: ["using mannual button", "using qr code"],
  },
  {
    title: "Mobile App",
    actions: ["using mannual button"],
  },
];
const LocationPolices = ({ setEdit }) => (
  <div className="px-6 py-4">
    <div className="flex items-center justify-start gap-2">
      <div className="p-2 rounded-full bg-green-500">
        <ImLocation2 className="text-white font-bold" />
      </div>
      <h1 className="text-lg font-semibold font-['Poppins']">
        Locations and Policies
      </h1>
    </div>
    <div className="px-5 py-4 border-[1px] border-gray-200 shadow-sm my-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <HiOutlineOfficeBuilding className="text-green-600 text-2xl" />
          <h3 className="text-md text-gray-600">Qurinom Solutions</h3>
        </div>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="flex items-center">
            <MdMoreVert />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu px-4 shadow bg-base-100 rounded-box w-50"
          >
            <li>
              <a onClick={() => setEdit(true)}>Edit</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-4" />

      <form action="" className="mt-5 flex flex-col justify-start gap-3">
        <div className="flex justify-start gap-14">
          <h2 className="text-md text-gray-400">Clocking in/out from</h2>
          <h2 className="text-md text-gray-900">Desktop, Mobile</h2>
        </div>
        <div className="flex justify-start gap-14">
          <h2 className="text-md text-gray-400">QR Code</h2>
          <h2 className="text-md text-gray-900">Yes</h2>
        </div>
        <div className="flex justify-start gap-14">
          <h2 className="text-md text-gray-400">Geofencing</h2>

          <label className="m-0 flex items-center gap-1 cursor-pointer">
            <input type="checkbox" className="toggle toggle-xs" />
            <span className="label-text">inactive</span>
          </label>
        </div>
        <div className="flex justify-start gap-14">
          <h2 className="text-md text-gray-400">Accurate Address</h2>
          <h2 className="text-md text-gray-900">-</h2>
        </div>
        <div className="flex justify-start gap-14">
          <h2 className="text-md text-gray-400">Radius</h2>
          <h2 className="text-md text-gray-900">-</h2>
        </div>
        <div className="flex justify-start gap-14">
          <h2 className="text-md text-gray-400">Policy</h2>
          <h2 className="text-md text-gray-900">-</h2>
        </div>
      </form>
    </div>
  </div>
);

const EditPage = ({ setEdit }) => (
  <div className="px-6 py-4">
    <h1 className="text-2xl font-semibold font-['Poppins'] ">
      Edit Qurinom solutions
    </h1>
    <hr className="my-3" />
    <h3 className="text-sm text-gray-600 font-bold font-['Poppins']">
      Allow clocking in/out on
    </h3>
    <div className="flex gap-3 my-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="px-5 py-4 border-[1px] border-gray-200 shadow-sm"
        >
          <h1 className="font-semibold">{item.title}</h1>
          <div className="flex flex-col items-start gap-3 justify-start">
            {item.actions.map((action, i) => (
              <label
                className="cursor-pointer gap-2 label flex items-center"
                key={i}
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-xs"
                />
                <span className="label-text text-gray-600 ">{action}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>

    <label className="cursor-pointer flex items-center gap-2 justify-start">
      <span className="  text-md font-semibold ">Geofencing</span>
      <input type="checkbox" className="toggle   toggle-success" />
    </label>
    <label className="cursor-pointer flex items-center gap-2 justify-start">
      <input type="checkbox" className="checkbox  checkbox-xs checkbox-error" />
      <span className="text-gray-400  text-md font-semibold my-3 ">
        Allow clock in/out outside the office
      </span>
    </label>
    <button
      onClick={() => setEdit(false)}
      className="btn btn-error btn-sm mt-5"
    >
      Cancel
    </button>
  </div>
);

const Location = () => {
  const [edit, setEdit] = useState(false);

  return (
    <SettingLayout select="settings">
      <div className="flex flex-row   basis-3/4 bg-white shadow-sm ">
        <SettingSideBar selected="location" />
        <div className="basis-2/3 py-5">
          {!edit ? (
            <LocationPolices setEdit={setEdit} />
          ) : (
            <EditPage setEdit={setEdit} />
          )}
          {/* After edit click */}
        </div>
      </div>
    </SettingLayout>
  );
};

export default Location;
