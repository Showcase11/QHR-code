import React from 'react';
import { RiPencilLine } from "react-icons/ri";
import { BiTrashAlt } from "react-icons/bi";
import { IoIosRadioButtonOff } from "react-icons/io";
import Onboardprogress from './Onboardprogress';

const Table = () => {
    return (
        <div className="flex flex-col p-10">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 "
                                    >
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 "
                                    >
                                        Task
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 "
                                    >
                                        Due date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 "
                                    >
                                        Assignee
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 "
                                    >
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    <label htmlFor="onboardprogress" className="cursor-pointer"><IoIosRadioButtonOff className='text-2xl'/></label>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Prepare company welcome kit
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    08 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Onboarding for Delphia Feil
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                    <label htmlFor="edittableon" className="modal-button"><RiPencilLine className='text-2xl p-0.5 mr-3 cursor-pointer'/></label>
<input type="checkbox" id="edittableon" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-3xl">
    <label htmlFor="edittableon" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">Edit Task</h2><hr className='pb-5' />
  <form className="pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Task Name *
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Task Type *
      </label>
      <p className="w-2/4">
                       <select className="select text-gray-500 w-full border-inherit">
                                 <option>Checkbox</option>
                                 <option>Employee Information</option>
                                 <option>File upload</option>
                        </select>
        </p>
    </div>
    <div className="flex items-center justify-between">
    <p className="float-left w-2/4">
                       <p className='pb-3 font-bold'>Assignee *</p>
                       <select className="select text-gray-500 w-full border-inherit">
                                 <option>Employee Group</option>
                                 <option>Specific Employee</option>
                        </select>
        </p>
        <p className="float-right w-[333px]"> 
        <input className="shadow appearance-none border rounded w-full mt-7 py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Employee" /> 
        </p>
    </div>
<div className='pt-6 mb-6'>
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Due Date *
      </label>
<input type='date' className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username" />
</div>
<div>
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Description
      </label>
<textarea type='text' className="h-52 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Take some time to give feedback to your manager and team before leaving them." />
</div>
  </form>
    <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Save</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button id="my-modal-5" className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"><a href="#">Cancel</a></button>
            </div>
    </div>
  </div>
</div>
<a href="#deletetable"><BiTrashAlt className='text-2xl text-red-400 p-0.5 mr-3 cursor-pointer'/></a>
<div className="modal" id="deletetable">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Delete task?</h3>
    <p className="py-4">All employee information/file in this task will be deleted.</p>
    <div className="modal-action">
        <div className='flow-root'>
    <div className="sm:flex sm:justify-center lg:justify-start float-left">
            <div className="rounded-md shadow">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-3 py-2 text-base font-bold text-white hover:bg-red-600  md:px-5 text-sm">Delete</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button id="my-modal-5" className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"><a href="#">Cancel</a></button>
            </div>
    </div>
    </div>
    </div>
  </div>
</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    <label htmlFor="onboardprogress" className="cursor-pointer"><IoIosRadioButtonOff className='text-2xl'/></label>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Prepare company welcome kit
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    08 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Onboarding for Delphia Feil
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <RiPencilLine className='text-2xl p-0.5 mr-3 cursor-pointer'/>
                                    <BiTrashAlt className='text-2xl text-red-400 p-0.5 cursor-pointer'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    <label htmlFor="onboardprogress" className="cursor-pointer"><IoIosRadioButtonOff className='text-2xl'/></label>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Prepare company welcome kit
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    08 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Onboarding for Delphia Feil
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <RiPencilLine className='text-2xl p-0.5 mr-3 cursor-pointer'/>
                                    <BiTrashAlt className='text-2xl text-red-400 p-0.5 cursor-pointer'/>
                                    </td>
                                </tr>
                                <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                <label htmlFor="onboardprogress" className="cursor-pointer"><IoIosRadioButtonOff className='text-2xl'/></label>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Prepare company welcome kit
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    08 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Onboarding for Delphia Feil
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <RiPencilLine className='text-2xl p-0.5 mr-3 cursor-pointer'/>
                                    <BiTrashAlt className='text-2xl text-red-400 p-0.5 cursor-pointer'/>
                                    </td>
                                </tr>
                                <Onboardprogress />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;