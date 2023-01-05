import React, { useState } from "react";
import Personalinfo from "./Personalinfo";
import Address from "./Address";
import Contact from "./Contact";
import Bankinfo from "./Bankinfo";
import { useGlobalContext } from "../../context/context";

const General = () => {
  const [info, setInfo] = useState(false);
  const [address, setAddress] = useState(false);
  const [contact, setContact] = useState(false);
  const [bankinfo, setBankinfo] = useState(false);
  const { user } = useGlobalContext();
  const Oninfo = () => {
    setInfo(true);
  };

  const Onaddress = () => {
    setAddress(true);
  };

  const Oncontact = () => {
    setContact(true);
  };

  const Onbankinfo = () => {
    setBankinfo(true);
  };

  return (
    <div>
      {/* Personal info */}
      <div className="w-full bg-base-100 border p-7 mb-5">
      <div className="absolute right-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
              <button onClick={Oninfo} value={info}>
                Edit
              </button>
            </div>
        <div className="pb-7">
          <h1 className="font-bold">Personal Info</h1>
        </div>
        
        {info ? (
          <Personalinfo setInfo={setInfo} />
        ) : (
          <div class="flex flex-col justify-center">
  <div class="relative sm:rounded-1xl">
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div class="flex md:p-4 sm:p-0 lg:p-8 relative">
      <div className="">
                   <p className="pb-3 text-zinc-400">Full Name</p>
                   <p className="pb-3 text-zinc-400">Date of Birth</p>
                   <p className="pb-3 text-zinc-400">Nationality</p>
                   <p className="pb-3 text-zinc-400">Email</p>
                 </div>
                 <div className="xs:pl-5 sm:pl-5 md:pl-7 lg:pl-7 xl:pl-7">
                   <p className="pb-3">{user?.name}</p>
                   <p className="pb-3">{user?.age}</p>
                   <p className="pb-3">{user?.country}</p>
                   <p className="pb-3">{user?.email}</p>
                 </div>
      </div>
      <div class="flex md:p-4 sm:p-0 lg:p-8">
                 <div className="">
                   <p className="pb-3 text-zinc-400">Gender</p>
                   <p className="pb-3 text-zinc-400">Phone Number</p>
                   <p className="pb-3 text-zinc-400">Emergency Number</p>
                 </div>
                 <div className="pl-7">
                   <p className="pb-3">{user?.gender}</p>
                   <p className="pb-3">{user?.phoneNumber}</p>
                   <p className="pb-3">{user?.emergencyNumber}</p>
                </div>
      </div>
    </div>
  </div>
</div>
        )}
      </div>
      {/* Address  */}
      <div className="w-full bg-base-100 border p-7 mb-5">
      <div className="absolute right-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
      <button onClick={Onaddress} value={address}>
                Edit
              </button>
            </div>
        <div className="pb-7">
          <h1 className="font-bold">Address</h1>
        </div>
        {address ? (
          <Address setAddress={setAddress} />
        ) : (
          <div class="flex flex-col justify-center">
  <div class="relative sm:rounded-1xl">
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div class="flex md:p-4 sm:p-0 lg:p-8 relative">
            <div className="">
                  <p className="pb-3 text-zinc-400">Primary Address</p>
                  <p className="pb-3 text-zinc-400">Country</p>
                </div>
                <div className="pl-7">
                  <p className="pb-3">{user?.address}</p>
                  <p className="pb-3">{user?.country}</p>
                </div>
      </div>
      <div class="flex md:p-4 sm:p-0 lg:p-8">
      <div className="">
                  <p className="pb-3 text-zinc-400">Postal Code</p>
                </div>
                <div className="pl-7">
                  <p className="pb-3">{user?.pincode}</p>
                </div>
      </div>
    </div>
  </div>
</div>
        )}
      </div>

      {/* Bank info */}
      <div className="w-full bg-base-100 border p-7">
      <div className="absolute right-12 border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
      <button onClick={Onbankinfo} value={bankinfo}>
                Edit
              </button>
            </div>
        <div className="pb-7">
          <h1 className="font-bold">Bank Information</h1>
        </div>
        {bankinfo ? (
          <Bankinfo setBankinfo={setBankinfo} />
        ) : (
          <div class="flex flex-col justify-center">
  <div class="relative sm:rounded-1xl">
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div class="flex md:p-4 sm:p-0 lg:p-8 relative">
            <div className="">
                  <p className="pb-3 text-zinc-400">Bank Name</p>
                  <p className="pb-3 text-zinc-400">Branch</p>
                </div>
                <div className="pl-7">
                  <p className="pb-3">{user.bankName}</p>
                  <p className="pb-3">{user.branchName}</p>
                </div>
      </div>
      <div class="flex md:p-4 sm:p-0 lg:p-8">
      <div className="">
                  <p className="pb-3 text-zinc-400">UPI ID</p>
                  <p className="pb-3 text-zinc-400">Account Number</p>
                  <p className="pb-3 text-zinc-400">IFSC Code</p>
                </div>
                <div className="pl-7">
                  <p className="pb-3">{user.upi}</p>
                  <p className="pb-3">{user.bankAccount}</p>
                  <p className="pb-3">{user.ifscCode}</p>
                </div>
      </div>
    </div>
  </div>
</div>
        )}
      </div>
      {/* <div className="w-full px-4 py-5 bg-base-100 border mt-5">
        <div className="pb-7">
          <h1 className="font-bold">Bank Information</h1>
        </div>
        {bankinfo ? (
          <Bankinfo setBankinfo={setBankinfo} />
        ) : (
          <div className="flex w-full relative">
            <div className="absolute right-0 top-0  border border-green-300 py-1 px-4 rounded-sm btn-outline btn-success text-white">
              <button onClick={Onbankinfo} value={bankinfo}>
                Edit
              </button>
            </div>
            <div className="grid flex-grow bg-base-100 place-items-left">
              <div className="flow-root">
                <div className="float-left pr-24">
                  <p className="pb-3 text-zinc-400">Bank Name</p>
                  <p className="pb-3 text-zinc-400">Branch</p>
                </div>
                <div className="">
                  <p className="pb-3">{user.bankName}</p>
                  <p className="pb-3">{user.branchName}</p>
                </div>
              </div>
            </div>
            <div className="grid flex-grow bg-base-100 place-items-right">
              <div className="flow-root">
                <div className="float-left pr-24">
                  <p className="pb-3 text-zinc-400">UPI ID</p>
                  <p className="pb-3 text-zinc-400">Account Number</p>
                  <p className="pb-3 text-zinc-400">IFSC Code</p>
                </div>
                <div className="">
                  <p className="pb-3">{user.upi}</p>
                  <p className="pb-3">{user.bankAccount}</p>
                  <p className="pb-3">{user.ifscCode}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default General;
