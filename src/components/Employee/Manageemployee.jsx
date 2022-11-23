import React from "react";
import Table from "./Table";
import {Link} from "react-router-dom";
export default function Manageemployee () {
 return (
    <>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <select className="w-100 p-2 text-gray-500 border rounded-md mx-6  ">
          < option>
            ACTIVE EMPLOYEE
            </option>
          <option>DEFAULT EMPLOYEE</option>
        </select>
  </div>
 <div className="flex-none">
  <button className="btn btn-active btn-ghost">Download</button>
{/* The button to open modal */}

{/* The button to open modal */}
<label htmlFor="my-modal" className="btn">My Profile</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
   
  <form>
      <div class="grid grid-cols-2 gap-5">
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="First Name"
        />
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="Last Name"
        />
        <input
          type="email"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Email"
        />
        <input
          type="tel"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Phone"
        />
        <textarea
          cols="10"
          rows="5"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <input
        type="submit"
        value="Submit"
        class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
      />
    </form>

    
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Close</label>
    </div>
  </div>
</div>
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
<div className="w-100 flex mt-28">
        <select className="w-100 p-2 text-gray-500 border rounded-md mx-6  ">
          <option>
            ALL JOB TITLE
          </option>
          <option>Account Executive</option>
          <option>Account Manager</option>
          <option>Admin</option>
          <option>Admin Manager</option>
          <option>Finanace Manager</option>
          <option>HR Manager</option>
          <option>HR Specailist</option>
         
         
        </select>

       
        <select className="w-100% p-2 text-gray-500  border rounded-md mx-2">
          <option>All Sources</option>
          <option>Agency</option>
          <option>Career-site</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>Referral</option>
        </select>

        <select className="w-100% p-2 text-gray-500  border rounded-md mx-2">
          <option>All Sources</option>
          <option>Agency</option>
          <option>Career-site</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>Referral</option>
        </select>
        
        <select className="w-100% p-2 text-gray-500  border rounded-md mx-2">
          <option>All Sources</option>
          <option>Agency</option>
          <option>Career-site</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>Referral</option>
        </select>

        <select className="w-100% p-2 text-gray-500  border rounded-md mx-2">
          <option>All Sources</option>
          <option>Agency</option>
          <option>Career-site</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>Referral</option>
        </select>
        </div>
        <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold leading-tight"></h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Employee Name
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Department
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Job Title
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Office
              </th>

              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Employee Status
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Line Manager
              </th>
             
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Settings
              </th>
             

            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">

                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt="" 
                      to="/employee"
                    />
                  </div>

                  <div class="ml-3">
                    <Link to="/employee" class="text-gray-900 whitespace-no-wrap">
                      Mahadevapuram Sahithya
                    </Link>
                    <p class="text-gray-600 whitespace-no-wrap"></p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Qs</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Developer</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">QS</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>



              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Active</span>
                </span>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">QS</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>




              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                  <Link to="/employee" class="text-gray-900 whitespace-no-wrap">
                      Sukanya
                    </Link>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap"></p>
                <p class="text-gray-600 whitespace-no-wrap">Qs</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Developer</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>

              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">QS</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>

              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Active</span>
                </span>
              </td>

              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">QS</p>
                <p class="text-gray-600 whitespace-no-wrap"></p>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


  </>  
  )
}


