import React from "react";
import { Layout } from "../components";

import { useGlobalContext } from "../context/context";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import Newspage from "../components/Recruitment/Newspage";
 import Newsdata from "./Newsdata";
const News = () => {
  const { loading, newsData,   fetchNewsData} = useGlobalContext();

  useEffect(() => {
    fetchNewsData ();
  }, []);

  return (
    <Layout>
        <div className="py-4">
          {loading ? (
            <h1>Loading..</h1>
          ) : (
            <div className="">
              <div className="flex justify-end items-center ">
                <label
                  htmlFor="my-modal-3"
                  className="btn mr-5 mb-6 border-none bg-sky-500 text-white "
                >
                  Create
                </label>
                <Newspage />
              </div>
              {newsData.length === 0 ? (
                <h1 className="text-md font-semibold text-gray-700 mx-8">
                  No data available
                </h1>
              ) : (
                <div className="flex flex-col justify-center mx-5  gap-5">
                  {newsData?.map((news) => (
                   // <Newsdata key={job._id} data={job} />
                  <Newsdata  key={news._id} data={news} /> 
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
    </Layout>
  );
};

export default News;
