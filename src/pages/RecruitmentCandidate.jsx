import React, { useState, useEffect, Fragment } from "react";
import { Layout } from "../components";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import toast from "react-hot-toast";
import CreateCandidate from "../components/Recruitment/CreateCandidate";
import CandidateCard from "../components/Recruitment/CandidateCard";
import EditCandidateRow from "../components/Recruitment/EditCandidateRow";
import CandidateTable from "../components/Recruitment/CandidateTable";

const RecruitmentCandidate = () => {
  const { loading, candidateData, fetchCandidateData, url, user } =
    useGlobalContext();
  useEffect(() => {
    fetchCandidateData();
  }, []);

  return (
    <Layout>
      <NavLayout select="candidate">
        <div className="py-4">
          {loading ? (
            <h1>Loading..</h1>
          ) : (
            <div className="flex items-center justify-center flex-col relative">
              <div className="flex justify-end items-center pt-5 mb-5">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm absolute top-3 right-0 mr-5 mb-4 border-none bg-sky-500 text-white "
                >
                  New Candidate
                </label>
                <CreateCandidate />
              </div>
              {candidateData.length === 0 ? (
                <h1 className="text-md font-semibold text-gray-700 mx-8">
                  No data available
                </h1>
              ) : (
                <CandidateTable candidateData={candidateData} />
              )}
            </div>
          )}
        </div>
      </NavLayout>
    </Layout>
  );
};

export default RecruitmentCandidate;
