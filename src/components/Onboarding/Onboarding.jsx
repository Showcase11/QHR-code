import React, {useState} from 'react';
import Select from 'react-select';   
import Inprogress from './Inprogress';
import Completed from './Completed';
import { IoIosNotifications } from "react-icons/io";
import Img1 from '../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

const Onboarding = () =>{
  const [selectedOption, setSelectedOption] = useState({ value: 1, label: "In Progress" });
  const [selectedOption1, setSelectedOption1] = useState({ value: 1, label: "All HR in-charge" });
  const [userQueryForm, setuserQueryForm] = useState({
    templatename: null,
    incharge: null,
  });
  const data = [
    {
      value: 1,
      label: "In Progress"
    },
    {
      value: 2,
      label: "Completed"
    }
  ];
  const data1 = [
    {
      value: 1,
      label: "All HR in-charge"
    },
    {
      value: 2,
      label: "Sukanya"
    }
  ];
  const handleChange = e => {
    setSelectedOption(e);
  }
  const handleChange1 = e => {
    setSelectedOption1(e);
  }
  const handleForm = (e) => {
    alert('123456')
    e.preventDefault();
   setuserQueryForm({
    templatename: null,
    incharge: null
    });
console.log(userQueryForm);
    e.target.templatename.value = "";
    e.target.incharge.value = "";
  };

  return (
    <div>
    <div className="w-100 flex mt-5 pb-10 gap-5">
    <Select
        placeholder="Select Option"
        value={selectedOption}
        options={data} 
        onChange={handleChange}
      />
<Select
        placeholder="Select Option"
        value={selectedOption1}
        options={data1} 
        onChange={handleChange1}
      />
       <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered w-96" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>
<div className="w-full flex p-4 shadow-md pt-5 bg-white">
<IoIosNotifications className='text-3xl' /><p className='pt-0.5'>2 employee records created waiting for the checklist assignment.</p>
<div className="dropdown dropdown-center">
<label tabIndex={0}>
<button className="badge  mr-3 mt-1 ml-2 p-2.5">@Sukanya</button>
</label>
<div tabIndex={0} className="mt-3 flex card card-compact dropdown-content w-80 bg-base-100 shadow">
<div className="card-body">
    <div className="flex w-12 rounded pb-5">
    <img
src={Img1}
alt="profile"
className="mask rounded-full w-12 h-12"
/>
    <h1 className='flex flex-col pl-5 pt-3'>
              Sukanya
  </h1>
    </div>
  
  <div className='flow-root'>
  <div className='float-left  w-2/5'>
<p className='pb-3 text-zinc-400'>Join Date</p>
<p className='pb-3 text-zinc-400'>Job Title</p>
<p className='pb-3 text-zinc-400'>Department</p>
<p className='pb-3 text-zinc-400'>Office</p>
  </div>
  <div className='float-left  w-3/5'>
 <p className='pb-3'>07 Oct 2022</p>
 <p className='pb-3'>IT / Tech Manager</p>
 <p className='pb-3'>Qurinom solutions</p>
 <p className='pb-3'>Qurinom solutions</p>
  </div>
  </div>
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="mt-3 sm:mt-0 sm:ml-3">
<label htmlFor="my-modal-5" className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg cursor-pointer">Assign checklist</label>
</div>
</div>
  </div>
</div>
</div>
<form onSubmit={handleForm}>
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box  w-11/12 max-w-3xl">
    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">Assign Checklist</h2><hr className='pb-5' />

<div class="flow-root pb-7 gap-3">

<p class="float-left w-2/5">
<h3 className='flex pb-5'><IoPersonCircleOutline className='text-2xl' />Sukanya</h3>

          <p className='pb-3 font-bold'>Template *</p>
          <select className="select text-gray-500 w-full border-inherit" placeholder='Select Template'
          value={userQueryForm.templatename}
          onChange={(e) => {
            setuserQueryForm({
              ...userQueryForm,
              templatename: e.target.value,
            });
          }}
          id="templatename" 
          type="text" 
          required
          name="templatename" 
          >
                    <option>Onboarding</option>
                    <option>Govardhan</option>
                    <option>Sukanya</option>
           </select>
</p>

<p className="float-right w-2/5"> 
<h3 className='pb-5 flex'><IoInformationCircleOutline className='text-xl text-zinc-400 mr-2' />Join Date: 07 Oct 2022</h3>
              <p className='pb-3 font-bold'>HR in-charge *</p>
              <select className="select text-gray-500 w-full border-inherit" 
              value={userQueryForm.incharge}
              onChange={(e) => {
                   setuserQueryForm({
                       ...userQueryForm,
                       incharge: e.target.value,
              });
                }}
              placeholder="Note(Optional)"
              id="incharge"
              rows="1"
              required
              name="incharge"
              >
                   <option>Sukanya B</option>
              </select>
</p>

</div>
<p className='flex'><IoInformationCircleOutline className='text-xl text-zinc-400 mr-2' />We will send reminders to employee about incomplete tasks.</p>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Assign</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
  </div>
  
</div>
</form>
      <button className="badge badge-md mt-1 p-2.5">@Kenton Renner</button>
</div>
<br />
{selectedOption && selectedOption.value === 1 ? (
       <div><Inprogress /></div>
        ) : (
       <div ><Completed /></div>
     )}

</div>
  )
}
export default Onboarding;