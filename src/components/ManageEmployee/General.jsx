import React, {useState} from 'react';
import Personalinfo from './Personalinfo';
import Address from './Address';
import Contact from './Contact';
import Bankinfo from './Bankinfo';
import { useGlobalContext } from "../../context/context";

const General = () => {
  const [info, setInfo] = useState(false);
  const [address, setAddress] = useState(false);
  const [contact, setContact] = useState(false);
  const [bankinfo, setBankinfo] = useState(false);
  const { user } = useGlobalContext();
  const Oninfo = () => {
    setInfo(true);
  }

  const Onaddress = () => {
    setAddress(true);
  }

  const Oncontact = () => {
    setContact(true);
  }

  const Onbankinfo = () => {
    setBankinfo(true);
  }

    return (
      <div>
        {/* Personal info */}
        <div className='w-full bg-base-100 border p-7'>
        <div className='pb-7'>
            <h1 className='font-bold'>Personal Info</h1>
            </div>
            {info ? <Personalinfo /> : (
            <div className="flex w-full">
              <div className="absolute right-16 top-56 mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <button onClick={Oninfo} value={info}>Edit</button>
        </div>
  <div className="grid flex-grow bg-base-100 place-items-left">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Full Name</p>
<p className='pb-3 text-zinc-400'>Date of Birth</p>
<p className='pb-3 text-zinc-400'>Nationality</p>
<p className='pb-3 text-zinc-400'>Email Address</p>
<p className='pb-3 text-zinc-400'>Health Insurance</p>
  </div>
  <div className=''>
 <p className='pb-3'>{user.name}</p>
 <p className='pb-3'>{user.age}</p>
 <p className='pb-3'>{user.country}</p>
 <p className='pb-3'>{user.email}</p>
 <p className='pb-3'>-</p>
  </div>
  </div>
  </div>
  <div className="grid flex-grow bg-base-100 place-items-right">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Gender</p>
<p className='pb-3 text-zinc-400'>Marital Status</p>
<p className='pb-3 text-zinc-400'>Personal Tax ID</p>
<p className='pb-3 text-zinc-400'>Social Insurance</p>
<p className='pb-3 text-zinc-400'>Phone Number</p>
  </div>
  <div className=''>
 <p className='pb-3'>{user.gender}</p>
 <p className='pb-3'>-</p>
 <p className='pb-3'>-</p>
 <p className='pb-3'>-</p>
 <p className='pb-3'>{user.emergencyNumber}</p>
  </div>
  </div>
  </div>
</div> )}
        </div> 
        {/* Address  */}
        <div className="w-full px-4 py-5 bg-base-100 border mt-5">
        <div className='pb-7'>
            <h1 className='font-bold'>Address</h1>
            </div>
            {address ? <Address /> : (
            <div className="flex w-full">
              <div className="absolute right-16 top-[33rem] mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <button onClick={Onaddress} value={address}>Edit</button>
        </div>
  <div className="grid flex-grow bg-base-100 place-items-left">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Primary Address</p>
<p className='pb-3 text-zinc-400'>Country</p>
<p className='pb-3 text-zinc-400'>State/Province</p>
  </div>
  <div className=''>
 <p className='pb-3'>{user.address}</p>
 <p className='pb-3'>{user.country}</p>
 <p className='pb-3'>Tokyo</p>
  </div>
  </div>
  </div>
  <div className="grid flex-grow bg-base-100 place-items-right">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>City</p>
<p className='pb-3 text-zinc-400'>Postal Code</p>
  </div>
  <div className=''>
 <p className='pb-3'>Tokyo</p>
 <p className='pb-3'>113-8654</p>
  </div>
  </div>
  </div>
</div>)}
        </div>
        {/* Contact */}
                    <div className="w-full px-4 py-5 bg-base-100 border mt-5">
                    <div className='pb-7'>
       
            <h1 className='font-bold'>Emergency Contact</h1>
            </div>
            {contact ? <Contact /> : (
            <div className="flex w-full">
            <div className="absolute right-16 top-[47rem] mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <button onClick={Oncontact} value={contact}>Edit</button>
        </div>
  <div className="grid flex-grow bg-base-100 place-items-left">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Full Name</p>
<p className='pb-3 text-zinc-400'>Phone Number</p>
  </div>
  <div className=''>
 <p className='pb-3'>Murakami Rei</p>
 <p className='pb-3'>{user.emergencyNumber}</p>
  </div>
  </div>
  </div>
  <div className="grid flex-grow bg-base-100 place-items-right">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Relationship</p>
  </div>
  <div className=''>
 <p className='pb-3'>Father</p>
  </div>
  </div>
  </div>
</div>)}
                    </div>
                    {/* Bank info */}
                    <div className="w-full px-4 py-5 bg-base-100 border mt-5">
                    <div className='pb-7'>
        
            <h1 className='font-bold'>Bank Information</h1>
            </div>
            {bankinfo ? <Bankinfo /> : (
            <div className="flex w-full">
            <div className="absolute right-16 top-[59rem] mr-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
            <button onClick={Onbankinfo} value={bankinfo}>Edit</button>
        </div>
  <div className="grid flex-grow bg-base-100 place-items-left">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Bank Name</p>
<p className='pb-3 text-zinc-400'>Branch</p>
<p className='pb-3 text-zinc-400'>SWIFT / BIC</p>
  </div>
  <div className=''>
 <p className='pb-3'>-</p>
 <p className='pb-3'>-</p>
 <p className='pb-3'>-</p>
  </div>
  </div>
  </div>
  <div className="grid flex-grow bg-base-100 place-items-right">
  <div className='flow-root'>
  <div className='float-left pr-24'>
<p className='pb-3 text-zinc-400'>Account Name</p>
<p className='pb-3 text-zinc-400'>Account Number</p>
<p className='pb-3 text-zinc-400'>IBAN</p>
  </div>
  <div className=''>
 <p className='pb-3'>-</p>
 <p className='pb-3'>{user.accountNumber}</p>
 <p className='pb-3'>{user.ifscCode}</p>
  </div>
  </div>
  </div>
</div>)}
                    </div>
                    </div>
          
    );
};

export default General;