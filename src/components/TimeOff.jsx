import React from "react";
import { MdFlight } from "react-icons/md";
const TimeOff = () => {
  return (
    <div className=" my-6 shadow-sm bg-white text-gray-700 px-8 pb-5">
      <header className="flex justify-between items-center gap-3 py-3  border-b-[1px] border-gray-300 ">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 bg-green-600 rounded-full">
            <MdFlight className="  text-white " />
          </div>
          <h1 className="font-bold font-sans text-md">My Time Off</h1>
        </div>
        <h1 className="font-bold font-sans text-md text-green-600 ">
          view all
        </h1>
      </header>
      <div className="flex flex-row my-3 py-2 rounded-sm bg-sky-50">
        <div className="basis-1/4 border-r-[1px] border-gray-400">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold font-sans">12</h1>
            <h2 className="text-sm font-roboto font-medium">Apr</h2>
          </div>
        </div>

        <div className="basiz-3/4 flex items-center flex-col">
          <div className="px-5 ">
            <h3 className="text-md text-gray-700 font-semibold">
              12 Apr 2022-15-15 Apr 2022
            </h3>
            <h4 className="text-sm text-gray-500">4 days pf Annual Time Off</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeOff;
