import React from "react";
import { TiStopwatch } from "react-icons/ti";
import { BsArrowRightCircle } from "react-icons/bs";
const ClockInOut = () => {
  return (
    <div className=" shadow-sm bg-white text-gray-700 px-8 pb-5 ">
      <header className="flex justify-between items-center gap-3 py-3 border-b-[1px] border-gray-300  ">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 bg-green-600 rounded-full">
            <TiStopwatch className="  text-white " />
          </div>
          <h1 className="font-bold font-sans text-md">Clock in/out</h1>
        </div>
        <h1 className="font-bold font-sans text-md">8:20:00-06 Apr</h1>
      </header>
      <div className="bg-gray-200 px-2 py-1 flex justify-between items-center my-5">
        <h1 className="font-bold font-sans text-md">First clock in --:--</h1>
        <h1 className="font-bold font-sans text-md">Last clock out --:--</h1>
      </div>
      <button className=" hover:scale-110 transition-transform ease-in-out delay-75 bg-green-600 font-medium font-sans w-full text-xl flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md">
        <BsArrowRightCircle /> Clock in 00:00:00 Hrs
      </button>
    </div>
  );
};

export default ClockInOut;
