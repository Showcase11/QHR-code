import React, { useState } from "react";
import { TiStopwatch } from "react-icons/ti";
const ToDo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=" my-6 shadow-sm bg-white text-gray-700 px-8 pb-5">
      <header className="flex justify-between items-center gap-3 py-3  border-b-[1px] border-gray-300 ">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 bg-green-600 rounded-full">
            <TiStopwatch className="  text-white " />
          </div>
          <h1 className="font-bold font-sans text-md">To-dos</h1>
        </div>
        <h1 className="font-bold font-sans text-md text-green-600 ">
          8 incompleted
        </h1>
      </header>
      <div className="my-4">
        <div className="flex gap-3 items-center my-2">
          <input
            type="checkbox"
            id="x"
            name="x"
            value="x"
            checked={isChecked}
            onChange={handleOnChange}
            className="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="">
            <h3 className="font-bold font-sans text-md text-gray-700">
              Sending an announcement email to entire
            </h3>
            <h3 className="font-bold font-sans text-sm text-red-600">
              Due 06 Apr 2022
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
