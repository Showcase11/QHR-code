import React, { useState } from "react";
import Layout from "../Layout";

import General from "./General";
import InCharge from "./InCharge";
import SettingLayout from "./SettingLayout";
import SettingSideBar from "./SettingSideBar";

const GeneralSettings = () => {
  const [isGeneral, setIsGeneral] = useState(true);

  return (
    <Layout>
      <SettingLayout select="settings">
        <div className="flex flex-row   basis-3/4 bg-white shadow-sm ">
          <SettingSideBar selected="general" />
          <div className="basis-2/3 py-5">
            <div className="mt-5  px-8">
              <div className="flex gap-4 items-center font-semibold py-2">
                <h1
                  className={`text-md ${
                    isGeneral
                      ? "text-green-500 border-b-[2px] border-green-500"
                      : "text-gray-400"
                  } pb-2  cursor-pointer `}
                  onClick={() => setIsGeneral(true)}
                >
                  GENERAL
                </h1>
                <h1
                  className={`text-md ${
                    !isGeneral
                      ? "text-green-500 border-b-[2px] border-green-500"
                      : "text-gray-400"
                  } pb-2  cursor-pointer `}
                  onClick={() => setIsGeneral(false)}
                >
                  PERSON IN CHARGE
                </h1>
              </div>
              <div className="">{isGeneral ? <General /> : <InCharge />}</div>
            </div>
          </div>
        </div>
      </SettingLayout>
    </Layout>
  );
};

export default GeneralSettings;
