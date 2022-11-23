import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offboarding from "../components/Offboarding/Offboarding";
import Onboarding from "../components/Onboarding/Onboarding";
import Todos from "./Todos";
import { BiCheck } from "react-icons/bi";
import Settings from "../components/Settings/Settings";
import { Layout } from "../components";

export default function Checklist() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Layout>
      <div className="mx-auto">
        <div className="flex flex-col justify-center">
          <div className="bg-white w-full shadow-lg">
            <div className="px-8 py-3 gap-1 font-sans flex items-center shadow-lg justify-between font-bold relative text-sm">
              <div className="flex justify-start items-center text-lg">
                <BiCheck />
                <h1>Checklist</h1>
              </div>
              <ul className="flex space-x-2 justify-center uppercase">
                <li>
                  <Link
                    href="/todos"
                    onClick={() => setOpenTab(1)}
                    className="inline-block px-4 py-2 text-gray-600 rounded bordered active underline underline-offset-8"
                  >
                    To-Dos
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => setOpenTab(2)}
                    className="inline-block px-4 py-2 text-gray-600 rounded underline underline-offset-8"
                  >
                    Onboarding
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => setOpenTab(3)}
                    className="inline-block px-4 py-2 text-gray-600 rounded underline underline-offset-8"
                  >
                    Offboarding
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => setOpenTab(4)}
                    className="inline-block px-4 py-2 text-gray-600 rounded underline underline-offset-8"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
              <div className="bg-red-500 rounded p-2 text-white">
                <button>Upgrade Plan</button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-zinc-100 h-screen">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
              <Todos />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <Onboarding />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              <Offboarding />
            </div>
            <div className={openTab === 4 ? "block" : "hidden"}>
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
