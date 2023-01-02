import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import CandidateCard from "./CandidateCard";
import EditCandidateRow from "./EditCandidateRow";
import axios from "axios";
import toast from "react-hot-toast";
const CandidateTable = ({ candidateData }) => {
  const { loading, fetchCandidateData, url, user } = useGlobalContext();
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    createdAt: "",
    resume: "",
    status: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
      createdAt: editFormData.createdAt,
      resume: editFormData.resume,
      status: editFormData.status,
    };
    try {
      console.log(editFormData);
      const res = await axios.put(
        `${url}/candidate/${editContactId}`,
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
    setEditContactId(contact._id);

    const formValues = {
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      createdAt: contact.createdAt,
      resume: contact.resume,
      status: contact.status,
    };

    setEditFormData(formValues);
  };
  console.log(editContactId);
  const handleDeleteClick = async (contactId) => {
    try {
      const res = await axios.delete(`${url}/candidate/${contactId}`);
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
    console.log(newFormData);
    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <div className="overflow-x-scroll w-auto max-w-[1000px] mt-5">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone number</th>
            <th>apply date</th>
            <th>resume</th>
            <th>status</th>
            <th>Dept</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {candidateData.map((contact) => (
            <>
              {editContactId === contact._id ? (
                <EditCandidateRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  handleEditFormSubmit={handleEditFormSubmit}
                />
              ) : (
                <CandidateCard
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateTable;
