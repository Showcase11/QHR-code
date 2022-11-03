import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaJoomla } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import {
  BsFillEmojiHeartEyesFill,
  BsEmojiSunglassesFill,
  BsEmojiAngry,
  BsEmojiSmile,
} from "react-icons/bs";
const NewsFeed = () => {
  return (
    <div className="w-full shadow-sm bg-white text-gray-700 my-5 ">
      <header className="flex justify-between items-center gap-3 py-3 shadow-sm  px-8">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 bg-green-600 rounded-full">
            <IoNewspaperOutline className="  text-white " />
          </div>
          <h1 className="font-bold text-md">News</h1>
        </div>
        <h1 className="font-bold text-md text-green-600 ">View all</h1>
      </header>
      <div className=" py-5 px-8">
        <div>
          <div className="flex gap-4 items-center">
            <FaJoomla className="text-red-600 text-xl" />
            <h1 className="font-bold text-sm font-sans">
              {" "}
              Happy day in April-Makr every day,Earth Day!
            </h1>
          </div>
          <div className="flex items-center gap-4 justify-start ml-6 text-sm text-gray-600 font-semibold mt-3">
            <h3 className="border-r-[1px] border-gray-500 px-3 ">
              10:15 Today
            </h3>
            <h3>Nick Busy</h3>
          </div>
          <div className="flex items-center gap-4 mx-5 mt-3">
            <div className="flex px-2 py-1 rounded-2xl gap-1 border-2 border-gray-400">
              <BsEmojiSunglassesFill className="text-lg text-green-700" />
              <AiFillLike className="text-lg text-sky-700" />
              <BsEmojiAngry className="text-lg text-red-700" />
              <BsEmojiSmile className="text-lg text-yellow-700" />
              <BsFillEmojiHeartEyesFill className="text-lg text-pink-700" />
            </div>
            <div className="flex items-center">
              {" "}
              <AiFillLike className="text-lg text-sky-700" />{" "}
              <h3 className="text-green-600 text-sm font-bold">Like</h3>
            </div>
            <div className="flex items-center gap-1">
              <BiCommentDetail />
              <h3 className="text-gray-600 text-sm font-bold"> 32 comments</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
