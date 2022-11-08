import React, {useState} from 'react';

const Duplicate = () => {
    const [userQueryForm, setuserQueryForm] = useState({
        username: null,
        query: null,
      });
    const handleForm = (e) => {
        alert('hfhgjhg')
        e.preventDefault();
       setuserQueryForm({
          username: null,
          query: null
        });
    console.log(userQueryForm.username);
        e.target.name.value = "";
        e.target.message.value = "";
      };

    return (
        <div>
            <div className="modal" id="cardduplicate">
  <div className="modal-box w-11/12 max-w-3xl">
    <label htmlFor="cardduplicate" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 className="font-bold text-lg pb-3">Duplicate Template</h2><hr className='pb-5' />
  <form className="pb-8 mb-4" onSubmit={handleForm}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Template Name *
      </label>
      <input className="shadow appearance-none border rounded w-1/2 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       value={userQueryForm.username}
       onChange={(e) => {
         setuserQueryForm({
           ...userQueryForm,
           username: e.target.value,
         });
       }}
       id="username" 
       type="text" 
       required
       name="name" 
       placeholder="Template name" 
       />
    </div>
    <label className="block text-gray-700 text-sm font-bold mb-2" for="inputMessage">
        Description
      </label>
<textarea type='text' className="h-20 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          value={userQueryForm.query}
          onChange={(e) => {
               setuserQueryForm({
                   ...userQueryForm,
                   query: e.target.value,
          });
            }}
          placeholder="Note(Optional)"
          id="inputMessage"
          rows="1"
          required
          name="message"
 />
<div className="sm:flex sm:justify-center lg:justify-start mt-5">
            <div className="rounded-md shadow">
              <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Save</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button id="my-modal-8" className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg"><a href="#">Cancel</a></button>
            </div>
    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Duplicate;