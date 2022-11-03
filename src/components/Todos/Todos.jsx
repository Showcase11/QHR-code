import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Progresstable from './Progresstable';
import Completedtable from './Completedtable';
import Select from 'react-select';

const Todos = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 1, label: "In Progress" });
  const data = [
    {
      value: 1,
      label: "In Progress"
    },
    {
      value: 2,
      label: "Completed"
    }
  ];
  const handleChange = e => {
    setSelectedOption(e);
  }
    // position: absolute;
    // top: 0;
    // right: 0;
    // width: 87%;
    // height: 91%;
    // border: none;
    // background: none;
    // font-size: 18px;

    // height: 100%;
    // width: 31%;
    // display: block;
    // border: none;
    // border-radius: 25px;

    return (
        <div>
        <div className="flex mt-5 gap-5">
        <Select
        placeholder="Select Option"
        value={selectedOption}
        options={data} 
        onChange={handleChange}
      />
        <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[400px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search Here..." />
      </div>
    {selectedOption && selectedOption.value === 1 ? (
       <div><Progresstable /></div>
        ) : (
       <div ><Completedtable /></div>
     )}
      </div>
    );
};

export default Todos;