import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import Approval from "./Approval";
import ClockInOut from "./ClockInOut";
import Follows from "./Follows";
import NewMember from "./NewMember";
import NewsFeed from "./NewsFeed";
import Payrool from "./Payrool";
import TimeOff from "./TimeOff";
import ToDo from "./ToDo";
import WhOff from "./WhOff";
const Main = () => {
  return (
    <div className="bg-sky-50 h-full">
      <div className="bg-white w-full shadow-lg">
        <div className="px-8 py-3 gap-1 font-sans flex items-center text-2xl font-bold text-gray-600  ">
          <AiOutlineDashboard />
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="basis-3/5  px-8">
          <Approval />
          <Follows />
          <NewsFeed />
          <Payrool />
        </div>
        <div className="basis-2/5 px-8  ">
          <ClockInOut />
          <ToDo />
          <TimeOff />
          <WhOff />
          <NewMember />
        </div>
      </div>
    </div>
  );
};

export default Main;
