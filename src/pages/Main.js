import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { Layout } from "../components";
import Approval from "../components/Approval";
import ClockInOut from "../components/ClockInOut";
import Follows from "../components/Follows";
import NewMember from "../components/NewMember";
import NewsFeed from "../components/NewsFeed";
import Payrool from "../components/Payrool";
import TimeOff from "../components/TimeOff";
import ToDo from "../components/ToDo";
import WhOff from "../components/WhOff";
const Main = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Main;
