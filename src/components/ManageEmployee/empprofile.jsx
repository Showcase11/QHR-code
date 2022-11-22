import React, {useState} from 'react';
import Img1 from '../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';
import { IoChevronDownSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import General from './General';
import Job from './Job';

const Empprofile = () => {
  const [openTab, setOpenTab] = useState(1);
  // useEffect(() => {

  // })

    return (
      <div className="flex p-12 bg-zinc-100">
            <div className="flex flex-col h-[1008px] p-3 bg-base-100 border w-1/5 mr-6">
            <div className='p-7'>
        <img
src={Img1}

alt="profile"
className="mask rounded-full w-28 h-28 mb-4"
/>
<h1 className='font-bold mb-2'>Aoi Nakanishi</h1>
<select className="w-100 p-2 text-gray-500 border rounded-md mx-2 mb-5">
          <option>Active</option>
          <option>Onboarding</option>
          <option>proationary</option>
          <option>On leave</option>
</select>

        <div className='font-bold mb-5'>-</div>
        <h2 className='pb-5 text-gray-400'>HR Manager</h2><hr className='pb-5' />
        <div className='flex'><IoMailOutline className='text-lg mr-2.5 mt-1 text-slate-500' />nakanishiaoi@grove.com</div>
        <div className='flex'><IoCallOutline className='text-lg mr-2.5 mt-1 text-slate-500' />0817055547849</div>
        <div className='pb-2 flex'><IoGlobeOutline className='text-lg mr-2.5 mt-1 text-slate-500' />GMT +07:00</div><hr className='pb-5' />
        <div className="dropdown pb-3">
  <label tabIndex={0} className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 pt-2.5 pb-2.5 pr-8 pl-3.5 text-base font-bold text-white hover:bg-green-500 text-sm">Action <IoChevronDownSharp className='ml-2.5' /></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
 <li> <label htmlFor="my-modal-3">Onboarding</label></li>
    <li><label htmlFor="offboardemp">Offboarding</label></li>
  </ul>
 </div>
 <input type="checkbox" id="offboardemp" className="modal-toggle" />
<div className="modal">
<div className="modal-box  w-11/12 max-w-3xl">
    <label htmlFor="offboardemp" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h1 className="font-bold text-2xl pb-3">Offboard Employee</h1><hr className='pb-5' />
    <div className='flex items-center px-2 py-3'>
            <form className="w-full">
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Employee*
      </label>
    </div>
    <div className="w-3/4">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Aoi Nakanishi" />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name" >
      Resignation Date*
      </label>
    </div>
    <div className="w-3/4">
    <input type='date' className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" placeholder="Select Date" />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Last Working Date*
      </label>
    </div>
    <div className="w-3/4">
    <input type='date' className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" placeholder="Select Date" />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Reason for Leaving*
      </label>
    </div>
    <div className="w-3/4">
    <select className="select text-gray-500 w-full border-inherit">
                                 <option>Select Reason For Leaving</option>
                                 <option>Contract Finished</option>
                                 <option>Offer Declined</option>
                                 <option>Other</option>
                                 <option>Resignation</option>
                                 <option>Retirment</option>
                                 <option>Termination</option>
                        </select>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Manager Reassignment*
      </label>
    </div>
    <div className="w-3/4">
    <select className="select text-gray-500 w-full border-inherit">
                                 <option>Select Employee</option>
                                 <option>Sukanya <p>sukanya@grovehr.com</p></option>
                                 <option>Sahithya <p>Sahithya@grovehr.com</p></option>
                                 <option>Arth <p>Arth@grovehr.com</p></option>
                                 <option>Ibrahim <p>Ibrahim@grovehr.com</p></option>
                                 <option>Rahul <p>Rahul@grovehr.com</p></option>
                                 <option>Shourya <p>Shourya@grovehr.com</p></option>
                        </select>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      Note
      </label>
    </div>
    <div className="w-3/4">
      <textarea className="h-36 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Note" />
    </div>
  </div>
  
</form>
        </div>
<p className='flex'><IoInformationCircleOutline className='text-xl text-green-400 mr-2' />Notes</p>
<ul className='list-disc pl-6'>
    <li>This employee’s account will be deactivated automatically after the last working date.</li>
    <li>Offboarding will delete all tasks, progress, information and files of an IN PROGRESS onboarding checklist (if any).</li>
</ul>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Offboard</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
  </div>
</div>
 <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
<div className="modal-box  w-11/12 max-w-3xl">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">Assign Checklist</h2><hr className='pb-5' />

<div className="flow-root pb-7 gap-3">
<p className="float-left w-2/5">
<h3 className='flex pb-5'><IoPersonCircleOutline className='text-2xl' />Sukanya</h3>

          <p className='pb-3 font-bold'>Checklist Template *</p>
          <select className="select text-gray-500 w-full border-inherit" placeholder='Select Template'
          id="templatename" 
          type="text" 
          required
          name="templatename" 
          >
                    <option>Select Template</option>
                    <option>Onboarding</option>
           </select>
</p>

<p className="float-right w-2/5"> 
<h3 className='pb-5 flex'><IoInformationCircleOutline className='text-xl text-zinc-400 mr-2' />Join Date: 07 Oct 2022</h3>
              <p className='pb-3 font-bold'>HR in-charge *</p>
              <select className="select text-gray-500 w-full border-inherit" 
              placeholder="Note(Optional)"
              id="incharge"
              rows="1"
              required
              name="incharge"
              >
                   <option>Sukanya B boorlesukanya@gmail.com</option>
              </select>
</p>
</div>
<p className='flex'><IoInformationCircleOutline className='text-xl text-zinc-400 mr-2' />We will send reminders to employee about incomplete tasks.</p>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Assign</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
  </div>
</div>
<h2 className='text-gray-400'>DEPARTMENT</h2>
<div className='pb-4'>HR</div>
<h2 className='text-gray-400'>OFFICE</h2>
<div className='pb-4'>Qurinom solutions</div>
<h2 className='text-gray-400'>LINE MANAGER</h2>
<div>@ Sukanya </div>
</div>
            </div>
            <div className="container w-3/4">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
                    <div className="w-full py-3 bg-base-100 border">
                    <ul className="flex space-x-2 uppercase">
                        <li>
                            <Link
                                to='/employee/general'
                                onClick={() => setOpenTab(1)}
                                className="inline-block px-4 py-2 text-gray-600 rounded bordered active underline underline-offset-8"
                            >
                                GENERAL
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/employee/job"
                                onClick={() => setOpenTab(2)}
                                className="inline-block px-4 py-2 text-gray-600 rounded underline-offset-8"
                            >
                                JOB
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/employee/payroll"
                                onClick={() => setOpenTab(3)}
                                className="inline-block px-4 py-2 text-gray-600 rounded underline-offset-8"
                            >
                                PAYROLL
                            </Link>
                        </li>

                        
                        <li>
                            <Link
                                to="/employee/documents"
                                onClick={() => setOpenTab(4)}
                                className="inline-block px-4 py-2 text-gray-600 rounded underline-offset-8"
                            >
                                DOCUMENTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/employee/dependends"
                                onClick={() => setOpenTab(4)}
                                className="inline-block px-4 py-2 text-gray-600 rounded underline-offset-8"
                            >
                                DEPENDENDS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/employee/accountsettings"
                                onClick={() => setOpenTab(4)}
                                className="inline-block px-4 py-2 text-gray-600 rounded underline-offset-8"
                            >
                                ACCOUNT SETTINGS
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className={openTab === 1 ? "block" : "hidden"}>
                            {" "}
                           <General />
                        </div>
                    <div className={openTab === 2 ? "block" : "hidden"}>
                          {" "}
                          <Job />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empprofile;