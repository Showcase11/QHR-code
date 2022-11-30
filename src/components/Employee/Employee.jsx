import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Manageemployee from './Manageemployee';
import Directory from './Directory';
import Orgchart from './Orgchart';
const Employee = () =>{
    const [openTab, setOpenTab] = useState(1);

  return (
    <div>

<div className=" mx-auto">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-full shadow-lg">
          <div className="px-8 py-3 gap-1 font-sans flex items-center shadow-lg justify-between font-bold relative text-sm">
            <div className="flex justify-start items-center text-lg">
              {/* <BiCheck /> */}
              <h1>Employee</h1>
            </div>
            <ul className="flex space-x-2 justify-center uppercase">
              <li>
                <Link
                  href="/todos"
                  onClick={() => setOpenTab(1)}
                  className="inline-block px-4 py-2 text-gray-600 rounded bordered active underline underline-offset-8"
                >
                 Manage Employee
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => setOpenTab(2)}
                  className="inline-block px-4 py-2 text-gray-600 rounded underline underline-offset-8"
                >
                Directory
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => setOpenTab(3)}
                  className="inline-block px-4 py-2 text-gray-600 rounded underline underline-offset-8"
                >
                  Orgchart
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => setOpenTab(4)}
                  className="inline-block px-4 py-2 text-gray-600 rounded underline underline-offset-8"
                >
                  
                </Link>
              </li>
            </ul>
            <div className="bg-red-500 rounded p-2 text-white">
              <button>Upgrade Plan</button>
            </div>
          </div>
        </div>
        <div className="p-3 bg-zinc-100 h-screen">
          <div className={openTab === 1 ? "block" : "hidden"}>
            {" "}
            <Manageemployee /> 
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            <Directory /> 
          </div>
          <div className={openTab === 3 ? "block" : "hidden"}>
            <Orgchart /> 
          </div>
          <div className={openTab === 4 ? "block" : "hidden"}>
            {/* <Settings /> */}
          </div>
        </div>
      </div>
    </div>


      





    </div>
  )
}

export default Employee;
