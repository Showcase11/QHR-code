import React, { useState } from 'react';
import Empedit from './Empedit';
import {Link} from 'react-router-dom';
import { RiPencilLine } from "react-icons/ri";
import Newjobinformation from './Newjobinformation';
import Editjobinfo from './Editjobinfo';
import Workedit from './Workedit';
import { AiOutlinePlus } from "react-icons/ai";

const Job = () => {
    const [selectedOption, setSelectedOption] = useState(false);
    const [work, setWork] = useState(false);
   
  const handleEdit = () => {
    setSelectedOption(true);
  }

  const Onedit = () => {
    setWork(true);
  }
  
    return (
        <div>
            {/* Employee Info */}
        <div className='w-full bg-base-100 border p-7'>
            <div className='pb-7'>
            <h1 className='font-bold'>Employment Information</h1>
            </div>
                <div>
            
        {selectedOption ? <Empedit /> : (
            <div className="flex w-full">
              <div className="absolute right-16 top-56 mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <button value={selectedOption}
        onClick={handleEdit}>Edit</button>
        </div>
  <div className="grid flex-grow bg-base-100 place-items-left">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Employee ID</p>
<p className='pb-3 text-zinc-400'>Probation Start Date</p>
<p className='pb-3 text-zinc-400'>Probation End Date</p>
  </div>
  <div className=''>
 <p className='pb-3'>-</p>
 <p className='pb-3'>-</p>
 <p className='pb-3'>-</p>
  </div>
  </div>
  </div>
  <div className="grid flex-grow bg-base-100 place-items-right">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Join Date</p>
<p className='pb-3 text-zinc-400'>Contract Start Date</p>
<p className='pb-3 text-zinc-400'>Contract End Date</p>
  </div>
  <div className=''>
 <p className='pb-3'>10 Jun 2019</p>
 <p className='pb-3'>-</p>
 <p className='pb-3'>13 Sep 2024</p>
  </div>
  </div>
  </div>
</div>)}
</div>
        </div>
        {/* Job timeline */}
        <div className="w-full bg-base-100 border mt-5 p-7">
        <div className='pb-7'>
            <h1 className='font-bold'>Job Timeline</h1>
            </div>
            <div className="flex w-full">
            <div className="absolute right-16 top-[29rem] mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success hover:text-white">
            <label htmlFor="newjobinfo" className='cursor-pointer flex'><AiOutlinePlus className='mt-0.5 mr-2' />New Job Information</label>
            <Newjobinformation />
        </div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Effective Date</th>
        <th>Job Title</th>
        <th>Position Type</th>
        <th>Employment Type</th>
        <th>Line Manager</th>
        <th>Department</th>
        <th>Office</th>
        <th>Note</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
        <th>1</th>
        <td>10 Jun 2019</td>
        <td>IT Manager</td>
        <td>-</td>
        <td>Full-time</td>
        <td>Sukanya B</td>
        <td>IT</td>
        <td>Qurinom solution</td>
        <td>-</td>
        <td>
        <div className="dropdown">
  <label tabIndex={0}><button className="static">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </button></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
    <li><label htmlFor='editjobinfo'><RiPencilLine className='text-2xl p-0.5 mr-3 cursor-pointer'/>Edit</label></li>
  </ul>
</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<Editjobinfo />
</div>
</div>
{/* Work Schedule */}
<div className='w-full bg-base-100 border p-7 mt-5'>
            <div className='pb-7'>
            <h1 className='font-bold'>Work Schedule</h1>
            </div>
                {work ? <Workedit /> : (
            <div className="flex w-full">
              
            <div className="absolute right-16 top-[44rem] mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <button onClick={Onedit} value={work}>Edit</button>
        </div>
  <div className="grid flex-grow bg-base-100 place-items-left">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Current schedule</p>
<p className='pb-3 text-zinc-400'>Standard working hours/day</p>
<p className='pb-3 text-zinc-400'>Schedule type</p>
<p className='pb-3 text-zinc-400'>Total working hours/week</p>
<p className='pb-3 text-zinc-400'>Daily working hours</p>
  </div>
  <div className=''>
 <p className='pb-3'>Mon-Fri, Duration 40 hours/week</p>
 <p className='pb-3'>8h 00m</p>
 <p className='pb-3'>Duration-based</p>
 <p className='pb-3'>40h 00m</p>
 <p className='pb-3'>
 <div className='float-left pr-24'>
 <p className='pb-3'>Monday</p>
 <p className='pb-3'>Tuesday</p>
 <p className='pb-3'>Wednesday</p>
 <p className='pb-3'>Thursday</p>
 <p className='pb-3'>Friday</p>
 <p className='pb-3'>Saturday</p>
 <p className='pb-3'>Sunday</p>
  </div>
  <div className=''>
  <p className='pb-3'>8h 00m</p>
  <p className='pb-3'>8h 00m</p>
  <p className='pb-3'>8h 00m</p>
  <p className='pb-3'>8h 00m</p>
  <p className='pb-3'>8h 00m</p>
  <p className='pb-3'>(non-working day)</p>
  <p className='pb-3'>(non-working day)</p>
  </div>
 </p>
  </div>
  </div>
  </div>
</div>)}
        </div>
        <div className='w-full bg-base-100 border p-7 mt-5'>
<<<<<<< HEAD
        <div className='pb-7'>
            <h1 className='font-bold'>Job History</h1>
            </div>
            <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
=======
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
>>>>>>> master
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<<<<<<< HEAD
            </div>
        </div>
=======
</div>
        {/* <div className='w-full bg-base-100 border p-7 mt-5'>
        <div className='pb-7'>
            <h1 className='font-bold'>Job History</h1>
            </div>
        </div> */}
>>>>>>> master
        </div>
    );
};

export default Job;