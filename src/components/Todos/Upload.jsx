import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineCalendar } from 'react-icons/hi';
import Img1 from '../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';

const Upload = () => {

    const [file, setfile] = useState("");
    const isValidFileUploaded=(file)=>{
        const validExtensions = ['png','jpeg','jpg','pdf']
        const fileExtension = file.type.split('/')[1]
        return validExtensions.includes(fileExtension)
      }

    const fileChange = (e) => {
        if (e.target.files[0].length < 1) {
          return;
        }
        const file = e.target.files[0];
        if (isValidFileUploaded(file)) {
          const data = e.target.files[0];
          const imageurlupload = new FileReader();
          imageurlupload.readAsDataURL(data);
          imageurlupload.onloadend = () => setfile(imageurlupload.result);
        } else {
          alert("Only jpg/jpeg/png,doc,docx and pdf files are allowed!");    
          return;
        }
      };
    return (
        <div>
             <input type="checkbox" id="upload" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="upload" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className='flex'><h5 className='font-bold pr-3 pb-5'>Onboarding for </h5>
    <img
            src={Img1}
            alt="profile"
            className="mask rounded-full w-8 h-8"
          />
    <Link className='flex pl-3'>Loraine Berge</Link></div>
    <h3 className="text-lg font-bold pb-3">Upload signed work contract</h3>
    <div className="grid grid-flow-row-dense grid-cols-3 pb-5">
  <div className="flex col-span-2"><HiOutlineCalendar className='mt-0.5 mr-1' />Due date <p className='pl-5'>08 Jan 2020</p></div>
  <div>Assignee @ me</div>
</div>
<small>Please read through provided contract carefully, sign and upload it. Then, hand over one hard copy to HR.</small><hr className='mt-10' />
<h5 className='font-bold text-slate-500'>Employee Response</h5>
<div>
                    <input
                      onChange={(e) => fileChange(e)}
                      type={"file"}
                      className="mt-2 pt-5 border-slate-300"
                      required
                      name="files"
                    />
                  </div>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
            <button className="btn" disabled>Mark as Completed</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
            </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Upload;