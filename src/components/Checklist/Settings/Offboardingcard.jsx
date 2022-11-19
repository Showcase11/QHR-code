import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonAddOutline } from "react-icons/io5";

const Card = () => {
    return (
      <div className='h-screen'>
<div className="w-96 shadow-xl ml-10">
  <div className="p-2.5">
    <div className="navbar">
  <div className="flex-1 hover:underline">
  <Link to='/' className='flex font-bold'><IoPersonAddOutline className='mr-3 text-green-600 text-lg' />Offboarding</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
      <button className="static">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 absolute">
        <li><a className="justify-between"> Edit</a></li>
        <li><a>Duplicate</a></li>
        <li><a className='text-red-400'>Delete</a></li>
      </ul>
    </div>
  </div>
</div>
<p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div> 
</div>
    );
};

export default Card;





