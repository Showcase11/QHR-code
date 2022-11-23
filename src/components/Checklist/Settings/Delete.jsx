import React from 'react';

const Delete = () => {
    return (
        <div>
            <div className="modal" id="delete">
  <div className="modal-box">
    <h2 className="font-bold text-lg pb-5">Delete Template?</h2>
    <div className="sm:flex sm:justify-center lg:justify-start float-left pt-5">
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
    );
};

export default Delete;