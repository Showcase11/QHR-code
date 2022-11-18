import React, { useState } from 'react';


const NewDependend = () => {
    const[close, setClose] = useState(false);
    const [userForm, setUserform] = useState({
        firstname: null,
        dob: null,
        district: null,
        relationship: null,
        presonaliid: null,
        startdate: null,
        lastname: null,
        gender: null,
        nationality: null,
        city: null,
        taxid: null,
        enddate: null
      });
    const handleForm = (e) => {
        alert('hfhgjhg')
        e.preventDefault();
        setUserform({
            firstname: null,
            dob: null,
            district: null,
            relationship: null,
            presonaliid: null,
            startdate: null,
            lastname: null,
            gender: null,
            nationality: null,
            city: null,
            taxid: null,
            enddate: null
        });
    console.log(userForm);
        e.target.name.value = "";
        e.target.message.value = "";
      };

    const onClose = () => {
        setClose(true);
    }
    return (
        <div>
            <input type="checkbox" id="newdependend" className="modal-toggle" />
            <div className="modal">
  <div className="modal-box w-11/12 max-w-3xl">
    <label htmlFor="newdependend" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">New Dependent</h2><hr className='pb-5' />
    <form className="w-full" onSubmit={handleForm}>
           <div className='flow-root'>
  <div className='float-left w-[49%]'>
  
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            First Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='First Name'
                            value={userForm.firstname}
                            required
                            name='firstname'
       onChange={(e) => {
        setUserform({
           ...userForm,
           firstname: e.target.value,
         });
       }}
                        />
                    </div>
                   
                    <div className="mb-4">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Select Date'
                            value={userForm.dob}
                            required
                            name='dob'
       onChange={(e) => {
        setUserform({
           ...userForm,
           dob: e.target.value,
         });
       }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Relationship
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Input or Select Relationship'
                            value={userForm.relationship}
                            required
                            name='relationship'
       onChange={(e) => {
        setUserform({
           ...userForm,
           relationship: e.target.value,
         });
       }}
                        />
                    </div>  
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           District
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='District'
                            value={userForm.district}
                            required
                            name='district'
       onChange={(e) => {
        setUserform({
           ...userForm,
           district: e.target.value,
         });
       }}
                        />
                    </div>  
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Personal ID
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Personal ID'
                            value={userForm.presonaliid}
                            required
                            name='presonaliid'
       onChange={(e) => {
        setUserform({
           ...userForm,
           presonaliid: e.target.value,
         });
       }}
                        />
                    </div>  
                    <div className="mb-4">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Effective Start Date
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Select Date'
                            value={userForm.startdate}
                            required
                            name='startdate'
       onChange={(e) => {
        setUserform({
           ...userForm,
           startdate: e.target.value,
         });
       }}
                        />
                    </div>
                    
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-4">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            Last Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Name'
                            value={userForm.lastname}
                            required
                            name='lastname'
       onChange={(e) => {
        setUserform({
           ...userForm,
           lastname: e.target.value,
         });
       }}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Gender
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Select Gender"
                         value={userForm.gender}
                         required
                         name='gender'
       onChange={(e) => {
        setUserform({
           ...userForm,
           gender: e.target.value,
         });
       }}
                         >
                              <option>Select Gender</option>
                              <option>Female</option>
                              <option>Male</option>
                              <option>Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nationality
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Nationality"
                         value={userForm.nationality}
                         required
                         name='nationality'
       onChange={(e) => {
        setUserform({
           ...userForm,
           nationality: e.target.value,
         });
       }}
                         >
                              <option>Select  Nationality</option>
                              <option>Indian</option>
                              <option>Afhgan</option>
                              <option>American</option>
                              <option>Australian</option>
                              <option>Belgian</option>
                              <option>Chinese</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='City'
                            value={userForm.city}
                            required
                            name='city'
       onChange={(e) => {
        setUserform({
           ...userForm,
           city: e.target.value,
         });
       }}
                        />
                    </div>  
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Personal Tax ID
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Personal Tax ID'
                            value={userForm.taxid}
                            required
                            name='taxid'
       onChange={(e) => {
        setUserform({
           ...userForm,
           taxid: e.target.value,
         });
       }}
                        />
                    </div>  
                    <div className="mb-4">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Effective End Date
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Select Date'
                            value={userForm.enddate}
                            required
                            name='enddate'
       onChange={(e) => {
        setUserform({
           ...userForm,
           enddate: e.target.value,
         });
       }}
                        />
                    </div>  
                    
  </div>
  </div>
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Create</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button onClick={onClose} value={close} className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
</form>
  </div>
</div>
            {/* <input type="checkbox" id="newdependend" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-3xl">
    <label htmlFor="newdependend" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">New Job Information</h2><hr className='pb-5' />
    <form className="w-full">
           <div className='flow-root'>
           <div className="flex w-12 rounded pb-5">
    <img
// src={Img1}
alt="profile"
className="mask rounded-full w-12 h-12"
/>
    <h1 className='flex flex-col pl-5 pt-3'>
              Sukanya
  </h1>
    </div>
           <div className="mb-2 w-[49%]">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Effective Date*
                        </label>
                        <input
                            type="date"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Last Name'
                            value='113-865'
                        />
                    </div>  
           <div className="mb-2 pb-5">
                        <label
                            for="firstname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Note
                        </label>
                        <textarea
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Note'
                        />
                    </div>
                    <h1 className='font-bold pb-5'>Job Information</h1>
  <div className='float-left w-[49%]'>
  
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Job Title*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Nationality"
                         >
                              <option>Select Job Title</option>
                              <option>Account Executive</option>
                              <option>Account Manager</option>
                              <option>Admin</option>
                              <option>Admin Manager</option>
                              <option>Finanace Manager</option>
                              <option>Finanace Specialist</option>
                              <option>Hr Manager</option>
                              <option>Hr Specialist</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Line Manager
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Line Manager"
                         >
                              <option>Select Line Manager</option>
                              <option>Sukanya</option>
                              <option>Sahithya</option>
                              <option>Jahnavi</option>
                              <option>Rahul</option>
                              <option>Ibrahim</option>
                              <option>Shourya</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Department*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Department"
                         >
                              <option>Select Department</option>
                              <option>Finance</option>
                              <option>HR</option>
                              <option>IT</option>
                              <option>Management</option>
                              <option>Marketing</option>
                              <option>Operations</option>
                              <option>Qurinom Solutions</option>
                              <option>Sales</option>
                        </select>
                    </div>
                    
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-2">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            Position Type*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Nationality"
                         >
                              <option>Select Position Type</option>
                              <option>Employee</option>
                              <option>Manager</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Employment Type
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Employment Type"
                         >
                              <option>Select Employment Type</option>
                              <option>Contractor</option>
                              <option>Full-time</option>
                              <option>Intern</option>
                              <option>Part-time</option>
                              <option>Freelancer</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Office*
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40" 
                         placeholder="Office"
                         >
                              <option>Select  Office</option>
                              <option>Qurinom Sloutions</option>
                        </select>
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
</div> */}
        </div>
    );
};

export default NewDependend;