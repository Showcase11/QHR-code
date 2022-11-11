import React, {useState} from 'react';

const Address = () => {
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
                           Primary Address
                        </label>
                        <textarea
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='First Name'
                            value='7 Chome-3-1 Hongo, Bunkyo City, Tokyo'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Country
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
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            City
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
                    
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-2">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            State/Province
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
                            for="marital status"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Postal Code
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Last Name'
                            value='113-865'
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

export default Address;