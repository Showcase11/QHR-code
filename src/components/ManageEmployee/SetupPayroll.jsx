import React, { useState } from 'react';

const SetupPayroll = () => {

    const[close, setClose] = useState(false);

    const onClose = () => {
        setClose(true);
    }
    return (
             <div className='w-full bg-base-100 border p-7'>
                <h1 className='font-bold text-2xl'>Setup Payroll</h1> <hr className='mt-6 pb-4' />
        <form className="w-[55%]">
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-800 mb-1 md:mb-0 pr-4" for="inline-full-name">
      Pay Cycle*
      </label>
    </div>
    <div className="w-3/4">
    <select className="select w-full border-inherit" disabled >
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
  <h1 className='font-bold text-lg'>Salary</h1>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-800 mb-1 md:mb-0 pr-4" for="inline-full-name" >
      Salary *
      </label>
    </div>
    <div className="w-3/4">
    <input type='number' className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" placeholder="Select Date" />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="w-1/4">
      <label className="block text-gray-800 mb-1 md:mb-0 pr-4" for="inline-full-name">
      Effective Date *
      </label>
    </div>
    <div className="w-3/4">
    <div className='flow-root'>
  <div className='float-left w-[49%]'>
    <input type='date' className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" placeholder="Select Date" />
    </div>
    <div className='float-right w-[49%]'>
    <input type='date' className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" placeholder="Select Date" />
    </div>
    </div>
    </div>
  </div>
  <h1 className='font-bold text-lg'>Recurring Payments</h1>
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
    );
};

export default SetupPayroll;