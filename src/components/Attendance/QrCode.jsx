import React, { useState } from "react";
import { ImQrcode } from "react-icons/im";
import Layout from "../Layout";
import SettingLayout from "./SettingLayout";
import SettingSideBar from "./SettingSideBar";
const QrCode = () => {
  const [generate, setGenerate] = useState(false);
  return (
    <Layout>
      <SettingLayout select="settings">
        <div className="flex flex-row   basis-3/4 bg-white shadow-sm ">
          <SettingSideBar selected="qrcode" />
          <div className="basis-2/3 py-5">
            <div className="px-6 py-4">
              <div className="flex items-center justify-start gap-2">
                <div className="p-2 rounded-full bg-green-500">
                  <ImQrcode className="text-white font-bold" />
                </div>
                <h1 className="text-lg font-semibold font-['Poppins']">
                  QR Code
                </h1>
              </div>
              <p className="text-sm text-['Poppins'] mt-3  font-semibold">
                Generate a QR code to let everyone clock in / out easily by
                scanning with the GroveHR app{" "}
                <span className="text-green-600 hover:underline transition-all duration-100 ease-linear cursor-pointer">
                  Start displaying QR Code.
                </span>
              </p>
              <div className="flex items-center justify-start my-5 gap-5">
                <p className="text-sm font-semibold font-['Poppins']">
                  Auto generate new QR code every *
                </p>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered input-md max-w-xs"
                />
                <select className="select select-bordered max-w-xs">
                  <option selected>Second (S)</option>

                  <option>Minute(M)</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold font-['Poppins']">
                  Security Type *
                </p>
                <select className="select select-bordered max-w-xs w-full">
                  <option selected>Public Url for every One</option>

                  <option>Restricted url with password</option>
                </select>
              </div>

              <button
                onClick={() => setGenerate((prev) => !prev)}
                className={`${
                  !generate ? "btn-success" : "btn-info"
                } btn text-white mt-9`}
              >
                {generate
                  ? " Stop generating Qr Code"
                  : "Start generating Qr Code"}
              </button>
            </div>
          </div>
        </div>
      </SettingLayout>
    </Layout>
  );
};

export default QrCode;
