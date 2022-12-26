import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components";
import EditModel from "../components/Recruitment/EditModel";
import NavLayout from "../components/Recruitment/NavLayout";
import { useGlobalContext } from "../context/context";
import {IoMdGrid} from 'react-icons/io';
import { IoMdReorder } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/DragDrop";
import toast from "react-hot-toast";
import EditJobData from "../components/EditJobData";
import JobData from "../components/JobData";
import data from "../data.json";
import ReadOnlyRow from "../components/JobData";
import EditableRow from "../components/EditJobData";
// import { List } from "../components/List";


const Job = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [openTab, setOpenTab] = useState(1);
  const { url, fetchJobData, user } = useGlobalContext();
  // console.log();
  console.log(params);
  const [job, setJob] = useState({});

  const getSingleJob = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/job/${params.id}`);
      setJob(res.data);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleJob();
  }, []);


  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    cv : "",
    applied: ""
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    cv : "",
    applied: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  // };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      // id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      applied: addFormData.applied
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      cv : editFormData.cv,
      applied: editFormData.applied
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      cv: contact.cv,
      applied: contact.applied
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <Layout>
      <NavLayout select="jobs">
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <div className="flex justify-end items-center bg-gray-100">
              <label
                htmlFor="my-modal-4"
                className="btn mr-5 my-6 border-none bg-sky-500 text-white"
              >
                Edit
              </label>
    <ul className="flex border-2">
      <li><Link onClick={() => setOpenTab(1)}><IoMdReorder className="text-4xl" /></Link></li>
      <li><Link onClick={() => setOpenTab(2)}><IoMdGrid className="text-4xl" /></Link></li>
    </ul>
              <EditModel data={job} />
            </div>
          )}
        <div className={openTab === 2 ? "block" : "hidden"}>
        <div className="overflow-x-auto mt-5">
        <form onSubmit={handleEditFormSubmit}>
        {/* <div className="overflow-x-auto"> */}
  <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created Date</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>CV</th>
              <th>Stage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        {/* </div> */}
      </form>
</div>
        </div>
    <div className={openTab === 1 ? "block" : "hidden"}>
    <h1 className="menu overflow-y-auto bg-base-100 text-base-content">
    <DndProvider backend={HTML5Backend}>
        <DragDrop />
    </DndProvider>
    </h1>
    </div>
      </NavLayout>
    </Layout>
  );
};

export default Job;
