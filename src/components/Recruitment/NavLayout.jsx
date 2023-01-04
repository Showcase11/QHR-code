import React from "react";
import { SiMicrosoftoffice } from "react-icons/si";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
const NavLayout = ({ select, children }) => {
  const { user } = useGlobalContext();
  return (
    <div className="h-full">
      <div className=" bg-white shadow-lg flex justify-between items-center px-5 py-3">
        <div className="text-lg flex items-center gap-1 justify-center">
          <SiMicrosoftoffice />
          <h1 className="font-semibold">Recruitment</h1>
        </div>
        {/* Links */}
        <div className="flex justify-center gap-4 items-center">
          <Link to="/recruitment/jobs">
            <p
              className={`uppercase text-sm font-semibold   ${
                select === "jobs" ? "text-green-600" : "text-gray-600"
              }  `}
            >
              Jobs
            </p>
          </Link>
          {user?.department === "HR" && (
            <Link to="/recruitment/candidate">
              <p
                className={`uppercase text-sm font-semibold   ${
                  select === "candidate" ? "text-green-600" : "text-gray-600"
                }  `}
              >
                Candidate
              </p>
            </Link>
          )}
          {/* 
          {user?.department === "HR" && (
            <Link to="/recruitment/settings">
              <p
                className={`uppercase text-sm font-semibold   ${
                  select === "settings" ? "text-green-600" : "text-gray-600"
                }  `}
              >
                settings
              </p>
            </Link>
          )} */}
        </div>
        {/* Upgrade */}
        <button className="font-semibold rounded-lg px-6 btn-sm text-white">
          {/* Help Desk */}
        </button>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default NavLayout;
