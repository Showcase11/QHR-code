import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Offboardcomplete from './Offboardcomplete';

const Offcompletedtable = () => {
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
                                    <IoIosCheckmarkCircleOutline  className='text-2xl text-green-600'/>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Learn team members faces before joining
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    07 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Delphia Feil
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                                    <label htmlFor="offboardprogress" className="cursor-pointer"><IoEyeOutline className='text-lg'/></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    <IoIosCheckmarkCircleOutline  className='text-2xl text-green-600'/>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Prepare company welcome kit
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    08 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Sukanya
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <label htmlFor="offboardprogress" className="cursor-pointer"><IoEyeOutline className='text-lg'/></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    <IoIosCheckmarkCircleOutline  className='text-2xl text-green-600'/>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Prepare Workstation
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    08 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Jayce Walter
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <label htmlFor="offboardprogress" className="cursor-pointer"><IoEyeOutline className='text-lg'/></label>
                                    </td>
                                </tr>
                                <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                <IoIosCheckmarkCircleOutline  className='text-2xl text-green-600'/>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Submit Document - Soft copy of ID card
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-500 whitespace-nowrap">
                                    09 Oct 2022
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    Jayce Walter
                                    </td>
                                    <td className="flex px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <label htmlFor="offboardprogress" className="cursor-pointer"><IoEyeOutline className='text-lg'/></label>
                                    </td>
                                </tr>
                                <Offboardcomplete />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offcompletedtable;