import React, { useState } from 'react';
import NewDependend from './NewDependend';
import {Link} from 'react-router-dom';

const Dependends = () => {
    const [add, setAdd] = useState(false);
    const [work, setWork] = useState(false);
   
  const handleAdd = () => {
    setAdd(true);
  }
    return (
        <div>
            <div className="w-full px-4 py-5 bg-base-100 border mt-5">
            <div className='pb-7'>
            <h1 className='font-bold'>Dependents</h1>
            </div>
            <div className="absolute right-16 top-64 mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <label htmlFor="newdependend" className='cursor-pointer'>Add</label>
        </div>
                </div>
                <NewDependend />
        </div>
    );
};

export default Dependends;