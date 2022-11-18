import React, { useState } from 'react';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import {Link} from 'react-router-dom';
import Img1 from '../../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';
import Completedtable from './Completedtable';

const Completed = () => {
    const [selectedOption, setSelectedOption] = useState({ value: 1, label: "In Progress" });
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
    const handleChange = e => {
      setSelectedOption(e);
    }
  
    const [openTab, setOpenTab] = useState(1);
    const[show,setShow]=useState(true);
  
    const handleSubmit = e => {
      setOpenTab(e);
    }
    return (
        <div>
            <div className="w-full p-4 shadow-md pt-5 bg-white">

<div className="flex space-y-2">
<button onClick={handleSubmit}>

{openTab === 1 ? (
      <HiChevronRight className='hover:bg-gray-300 rounded-sm text-xl p-0.5 cursor-pointer' />
       ) : (
      <HiChevronDown onClick={()=>setShow(!show)} className='hover:bg-gray-300 rounded-sm text-xl p-0.5 cursor-pointer'  />     
)}
</button>
   
  <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className='flex flex-col pl-10 pr-10 tooltip' data-tip="Join Date">
              <h3>Oct,2022</h3>
              <h1 className='text-center'>11</h1>
  </div>
  <img
src={Img1}
alt="profile"
className="mask rounded-full w-12 h-12"
/>
       <Link className='flex pl-3'> Delphia Feil</Link>
</div>
<div className="flex-none gap-5">
  <p>Onboarding completed by me on 17 Oct 2022</p>
</div>
</div>
</div>
<hr />
{
 show ? null : <Completedtable />
}

</div>
        </div>
    );
};

export default Completed;