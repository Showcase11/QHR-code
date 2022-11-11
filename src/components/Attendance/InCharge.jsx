import React from "react";
import { BsInfoCircle, BsFillFileTextFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
const InCharge = () => {
  const data = false;
  return (
    <div className=" py-5">
      <h1 className="text-md flex text-gray-500  truncate items-center gap-1">
        <BsInfoCircle /> The person in charge will get notified when an
        employee's attendance is updated
      </h1>
      <div className="px-4 gap-2 mt-5 flex items-center justify-start py-2 border-[1px] rounded-sm border-gray-300 shadow-sm">
        <BiSearchAlt className="text-gray-500" />{" "}
        <input
          placeholder="Search..."
          className="outline-none border-none text-sm w-full text-gray-700 placeholder-gray-400"
        />
      </div>
      {!data && (
        <div className="flex flex-col items-center justify-center mt-8">
          <BsFillFileTextFill className="text-[70px] text-green-600" />
          <h1 className="text-sm text-gray-500 mt-6 ">No records.</h1>
        </div>
      )}
    </div>
  );
};

export default InCharge;
