import React, { useState } from 'react';

const Workedit = () => {
    const[close, setClose] = useState(false);

    const onClose = () => {
        setClose(true);
    }
    return (
        <div>
           <form className="w-full">
           <div className="mb-2">
                        <label
                            for="employeeid"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Work schedule name*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Select Work schedule name"
                         >
                              <option>Mon-Fri, Duration 40 hours/week</option>
                              <option>Mon-Fri, Duration 40 hours/week</option>
                        </select>
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

export default Workedit;