import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import SetupPayroll from './SetupPayroll';

const Payroll = () => {
    const [info, setInfo] = useState(false);
    const Oninfo = () => {
        setInfo(true);
      }
    return (
        <div>
            {info ? <SetupPayroll /> : (
 <div className='text-center p-52'>
           <h1 className='pb-5 text-2xl'>Setup payroll for Chiharu Komuro</h1>
           <h3 className='pb-5'>Enter a fixed salary, assign a Recurring Schedule.</h3>
           <div className="absolute border right-[33rem] border-green-300 py-1 px-4 rounded-sm btn-outline btn-success hover:text-white">
           <button onClick={Oninfo} className='flex cursor-pointer'><AiOutlinePlus className='mt-0.5 mr-2' />New Job Information</button>
        </div>
        </div>
)}
        
        </div>
    );
};

export default Payroll;