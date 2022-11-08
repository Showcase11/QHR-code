import React from 'react';
import Todosonboard from './Todosonboard';
import Img1 from '../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';
import Upload from './Upload';
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

const Todostable = () => {
    return (
        <div>
             <div className="flex flex-col p-10">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr className='lowercase'>
        <th style={{'z-index':'0'}}></th>
        <th>Task</th>
        <th className='flex'>Due date<IoIosArrowRoundUp className='text-lg text-emerald-600' /></th>
        <th>Checklist</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
        <th><IoIosRadioButtonOff className='text-2xl'/></th>
        <td><label htmlFor="my-modal-3" className="cursor-pointer">Collect Documents - Hard Copies</label></td>
        <td>08 Oct 2022</td>
        <td><label htmlFor="my-modal-3" className='flex cursor-pointer'>Onboarding for
          <img
            src={Img1}
            alt="profile"
            className="mask rounded-full w-8 h-8"
          />
                    Loraine Berge</label></td>
      </tr>
            <tr className="hover">
        <th><IoIosRadioButtonOff className='text-2xl'/></th>
        <td><label htmlFor="upload" className='flex cursor-pointer'>Upload signed work contract</label></td>
        <td>08 Oct 2022</td>
        <td><label htmlFor="upload" className='flex cursor-pointer'>Onboarding for 
        <img
            src={Img1}
            alt="profile"
            className="mask rounded-full w-8 h-8"
          />
          Delphia Feil</label></td>
      </tr>
      <tr className="hover">
        <th><IoIosRadioButtonOff className='text-2xl'/></th>
        <td>Collect Documents - Hard Copies</td>
        <td>08 Oct 2022</td>
        <td>Onboarding for Delphia Feil</td>
      </tr>
      <tr className="hover">
        <th><IoIosRadioButtonOff className='text-2xl'/></th>
        <td>Upload signed work contract</td>
        <td>08 Oct 2022</td>
        <td>Onboarding for Delphia Feil</td>
      </tr>
<Todosonboard />
<Upload />
    </tbody>
  </table>
</div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Todostable;