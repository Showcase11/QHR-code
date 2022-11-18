import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import Newtemplate from './Newtemplate';
import Onboardingcard from './Onboardingcard';
import Offboardingcard from './Offboardingcard';

const Settings = () => {

  const [openTab, setOpenTab] = useState(1);

  return (
        <div className='flex w-full justify-center pt-5'>
      <div className="flex card card-side bg-base-100 shadow-xl w-11/12 h-96">
      <div class="grid grid-cols-1">
      <div className="border border-grey-700 ">
      <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <h1 className='text-center pt-9 font-black text-2xl'>Settings</h1>
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><Link onClick={() => setOpenTab(1)}>Onboarding Template</Link></li>
      <li><Link onClick={() => setOpenTab(2)}>Offboarding Template</Link></li>
    </ul>
  </div>
      </div>
      </div>
      <div>
      <div className="flex w-full">
  <div className="grid flex-grow card  rounded-box ">
  <div className={openTab === 1 ? "block" : "hidden"}>
  <h1 className="pt-9 pl-24 h-24 font-black text-2xl">Onboarding Templates</h1>
  <Onboardingcard />
    </div>
    <div className={openTab === 2 ? "block" : "hidden"}>
    <h1 className="pt-9 pl-24 h-24 font-black text-2xl">Offboarding Templates</h1>
    <Offboardingcard />
                        </div>
  </div>
  <div className="flex-none grid card rounded-box gap-2 pt-9 h-24">
  <label htmlFor="newtemplate" className="btn btn-outline btn-success ml-96"><AiOutlinePlus />New Template</label>
  <Newtemplate />
  </div>
</div>
</div>
  </div>
</div>
    );
};

export default Settings;
