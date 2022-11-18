import React from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineCalendar } from 'react-icons/hi';
import Img1 from '../../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';

const Onboardcomplete = () => {
    return (
        <div>
            <input type="checkbox" id="onboardprogress" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="onboardprogress" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className='flex'><h5 className='font-bold pr-3 pb-5'>Onboarding for </h5>
    <img
            src={Img1}
            alt="profile"
            className="mask rounded-full w-8 h-8"
          />
                    <Link className='flex pl-3'>Loraine Berge</Link></div>
    <h3 className="text-lg font-bold pb-3">Prepare Workstation</h3>
    <div className="grid grid-flow-row-dense grid-cols-3 pb-5">
  <div className="flex col-span-2"><HiOutlineCalendar className='mt-0.5 mr-1' />Due date <p className='pl-5'>07 Jan 2020</p></div>
  <div>Assignee @ Ettie</div>
</div>
<p>Please ensure that your new team member have a prepared workstation with:</p>
<div className='pl-8'>
<ol className="list-decimal">
    <li>Laptop</li>
    <li>Work email</li>
    <li>Intranet/Team sites access</li>
    <li>...</li>
</ol>
</div>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            {/* <div className="rounded-md shadow">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Mark as Completed</button>
            </div> */}
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
            </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Onboardcomplete;