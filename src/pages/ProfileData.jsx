import React from "react";
import { useGlobalContext } from "../context/context";
import { useLocation } from "react-router-dom";
import { Layout } from "../components";

const ProfileData = () => {
  const { user } = useGlobalContext();
  // console.log(data);
  return (
    <Layout>
      <div className="flex shadow bg-base-100 rounded-box w-3/4 p-7 mt-10 m-auto content-center">
        <div className="grid flex-grow bg-base-100 place-items-left">
          <div className="flow-root">
            <div className="float-left pr-24">
              <p className="pb-3 text-zinc-400">Age</p>
              <p className="pb-3 text-zinc-400">Address</p>
              <p className="pb-3 text-zinc-400">Gender</p>
              <p className="pb-3 text-zinc-400">Profile Image</p>
            </div>
            <div className="">
              <p className="pb-3">{user.age}</p>
              <p className="pb-3">{user.address}</p>
              <p className="pb-3">{user?.gender}</p>
            </div>
          </div>
        </div>
        <div className="grid flex-grow bg-base-100 place-items-right">
          <div className="flow-root">
            <div className="float-left pr-24">
              <p className="pb-3 text-zinc-400">Account Number</p>
              <p className="pb-3 text-zinc-400">IFSC Code</p>
              <p className="pb-3 text-zinc-400">Country</p>
              <p className="pb-3 text-zinc-400">Emergency</p>
            </div>
            <div className="">
              <p className="pb-3">{user.account_numer}</p>
              <p className="pb-3">-</p>
              <p className="pb-3">-</p>
              <p className="pb-3">-</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProfileData;
