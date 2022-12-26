import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CreateCandidate from "../components/Recruitment/CreateCandidate";
import CandidateCard from "../components/Recruitment/CandidateCard";
const RecruitmentCandidate = () => {
  const { loading, candidateData, fetchCandidateData} = useGlobalContext();
  useEffect(() => {
    fetchCandidateData();
  }, []);
  console.log (candidateData)
  return (
    <Layout>
      <NavLayout select="candidate">
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
                <CreateCandidate/>
              </div>
              {candidateData.length === 0 ? (
                <h1 className="text-md font-semibold text-gray-700 mx-8">
                  No data available
                </h1>
              ) : (
                <div className="flex flex-col justify-center mx-5  gap-5">
                   <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>s.no</th>
              <th>name</th>
              <th>email</th>
              <th>phone number</th>
              <th>apply date</th>
              <th>resume</th>
              <th>status</th>
               
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {candidateData?.map((item, index) => (
               <tr key={index}>
               <th>{index + 1}</th>
               <td>{item.name}</td>
               
               <td>{item.email}</td>
               <td>{item.phoneNumber}</td>
               <td>{item.createdAt}</td>
               <td>{item.resume}</td>
               <td>{item.status}</td>
             </tr>
              
            ))}
          </tbody>
        </table>
                    
                  
                
                </div>
              )}
            </div>
          )}
        </div>
      </NavLayout>
    </Layout>
  );
};

export default RecruitmentCandidate;

