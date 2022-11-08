import React, {useState} from 'react';

const Personaliinfo = () => {
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
                            for="firstname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           First Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='First Name'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Last Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Last Name'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Date of Birth'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="nationality"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nationality
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Nationality"
                         >
                              <option>Select  Nationality</option>
                              <option>India</option>
                              <option>England</option>
                              <option>Afghan</option>
                              <option>America</option>
                              <option>British</option>
                              <option>Canadian</option>
                              <option>French</option>
                              <option>German</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Email Address'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="health"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Health Insurance
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Health Insurance'
                        />
                    </div>
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-2">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            Gender
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Gender"
                         >
                              <option>Select  Gender</option>
                              <option>Female</option>
                              <option>Male</option>
                              <option>Other</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="marital status"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Marital Status
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Marital Status"
                         >
                              <option>Select Marital Status</option>
                              <option>Single</option>
                              <option>Married</option>
                              <option>Other</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="personaltax"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Personal Tax ID
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Personal Tax ID'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="phonenumber"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="social"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Social Insurance
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Social Insurance'
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

export default Personaliinfo;