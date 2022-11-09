import React, { useState } from 'react';
import Img1 from '../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';

const Newjobinformation = () => {
    const[close, setClose] = useState(false);

    const onClose = () => {
        setClose(true);
    }
    return (
        <div>
          <input type="checkbox" id="newjobinfo" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-3xl">
    <label htmlFor="newjobinfo" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">New Job Information</h2><hr className='pb-5' />
    <form className="w-full">
           <div className='flow-root'>
           <div className="flex w-12 rounded pb-5">
    <img
src={Img1}
alt="profile"
className="mask rounded-full w-12 h-12"
/>
    <h1 className='flex flex-col pl-5 pt-3'>
              Sukanya
  </h1>
    </div>
           <div className="mb-2 w-[49%]">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Effective Date*
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Last Name'
                            value='113-865'
                        />
                    </div>  
           <div className="mb-2 pb-5">
                        <label
                            for="firstname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Note
                        </label>
                        <textarea
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Note'
                        />
                    </div>
                    <h1 className='font-bold pb-5'>Job Information</h1>
  <div className='float-left w-[49%]'>
  
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Job Title*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Nationality"
                         >
                              <option>Select Job Title</option>
                              <option>Account Executive</option>
                              <option>Account Manager</option>
                              <option>Admin</option>
                              <option>Admin Manager</option>
                              <option>Finanace Manager</option>
                              <option>Finanace Specialist</option>
                              <option>Hr Manager</option>
                              <option>Hr Specialist</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Line Manager
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Line Manager"
                         >
                              <option>Select Line Manager</option>
                              <option>Sukanya</option>
                              <option>Sahithya</option>
                              <option>Jahnavi</option>
                              <option>Rahul</option>
                              <option>Ibrahim</option>
                              <option>Shourya</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Department*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Department"
                         >
                              <option>Select Department</option>
                              <option>Finance</option>
                              <option>HR</option>
                              <option>IT</option>
                              <option>Management</option>
                              <option>Marketing</option>
                              <option>Operations</option>
                              <option>Qurinom Solutions</option>
                              <option>Sales</option>
                        </select>
                    </div>
                    
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-2">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            Position Type*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Nationality"
                         >
                              <option>Select Position Type</option>
                              <option>Employee</option>
                              <option>Manager</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Employment Type
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Employment Type"
                         >
                              <option>Select Employment Type</option>
                              <option>Contractor</option>
                              <option>Full-time</option>
                              <option>Intern</option>
                              <option>Part-time</option>
                              <option>Freelancer</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Office*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Office"
                         >
                              <option>Select  Office</option>
                              <option>Qurinom Sloutions</option>
                        </select>
                    </div>
                    
  </div>
  </div>
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Save</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button onClick={onClose} value={close} className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
</form>
  </div>
</div>
        </div>
    );
};

export default Newjobinformation;