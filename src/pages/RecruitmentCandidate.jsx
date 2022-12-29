import React, { useState, useEffect, Fragment } from "react";
import { Layout } from "../components";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import toast from "react-hot-toast";
import CreateCandidate from "../components/Recruitment/CreateCandidate";
import CandidateCard from "../components/Recruitment/CandidateCard";
import EditCandidateRow from "../components/Recruitment/EditCandidateRow";

const RecruitmentCandidate = () => {
  const { loading, candidateData, fetchCandidateData, url, user} = useGlobalContext();
  useEffect(() => {
    fetchCandidateData();
  }, []);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    createdAt: "",
    resume : "",
    status: ""
  });

  const [editContactId, setEditContactId] = useState(null);
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
      createdAt : editFormData.createdAt,
      resume: editFormData.resume,
      status: editFormData.status
    };
    try {
      const res = await axios.put(
        `${url}/candidate/${editFormData.id}`,
        editedContact
      );
      console.log(res);
      toast.success("Updated");
      fetchCandidateData();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      createdAt: contact.createdAt,
      resume: contact.resume,
      status: contact.status
    };

    setEditFormData(formValues);
  };

  const handleDeleteClick = async (contactId) => {
    try {
      const res = await axios.delete(`${url}/candidate/${contactId}`, {
        id: user._id,
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    fetchCandidateData();
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  console.log (candidateData)
  
  return (
    <Layout>
      <NavLayout select="candidate">
      <div className="py-4">
          {loading ? (
            <h1>Loading..</h1>
          ) : (
            <div>
              <div className="flex justify-end items-center bg-gray-100 pt-5">
                <label
                  htmlFor="my-modal-3"
                  className="btn mr-5 mb-6 border-none bg-sky-500 text-white "
                >
                  Create
                </label>
                <CreateCandidate />
              </div>
              {candidateData.length === 0 ? (
                <h1 className="text-md font-semibold text-gray-700 mx-8">
                  No data available
                </h1>
              ) : (
                  <div className="overflow-x-auto mt-5">
        <form onSubmit={handleEditFormSubmit}>
  <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>phone number</th>
              <th>apply date</th>
              <th>resume</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                  {candidateData.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditCandidateRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <CandidateCard
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
            </tbody>
            </table>
            </form>
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

