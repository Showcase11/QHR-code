import React, { useState } from 'react';

const Empedit = () => {
    const[close, setClose] = useState(false);

    const onClose = () => {
        setClose(true);
    }
    return (
        <div>
           <form className="w-full">
           <div className='flow-root'>
  <div className='float-left w-[49%]'>
  <div className="mb-2">
                        <label
                            for="employeeid"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Employee ID
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Employee ID'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="date"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Contract Start Date
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Select Date'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="enddate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Contract End Date
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Select End date'
                        />
                    </div>
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-2">
                        <label
                            for="joindate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Join Date*
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="probation date"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Probation Start Date
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="pobation enddate"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Probation End Date
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
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
    );
};

export default Empedit;