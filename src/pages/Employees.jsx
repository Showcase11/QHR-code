import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import EmployeeData from "../components/EmployeeData";
import EditEmployeeData from "../components/EditEmployeeData";
import { Layout } from "../components";
import { PhoneInput } from "react-contact-number-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useGlobalContext } from "../context/context";
const Employees = () => {
  const navigate = useNavigate();
  const { allusers, fetchUsers, loading, user } = useGlobalContext();
  const [contacts, setContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [addFormData, setAddFormData] = useState({
    name: "",
    pincode: "",
    phoneNumber: "",
    email: "",
  });
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const [editFormData, setEditFormData] = useState({
    name: "",
    pincode: "",
    phoneNumber: "",
    email: "",
    id: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(addFormData);
    const newContact = {
      name: addFormData.name,
      password: "hero@1234",
      phoneNumber: inputValue.countryCode + "" + inputValue.phoneNumber,
      email: addFormData.email,
      pincode: addFormData.pincode,
    };
    console.log(newContact);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/employee/signup",

        newContact
      );
      toast.success("User added successfully");
      console.log(res.data);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      name: editFormData.name,
      pincode: editFormData.pincode,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    console.log(editedContact);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/employee/${editFormData.id}`,
        editedContact
      );
      console.log(res);
      toast.success("Updated");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact._id);
    console.log(contact._id);
    const formValues = {
      name: contact.name,
      pincode: contact.pincode,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      id: contact._id,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async (contactId) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/employee/${contactId}`
      );
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    fetchUsers();
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      {loading ? (
        <h1>Loadding...</h1>
      ) : (
        <div className="app-container">
          <form onSubmit={handleAddFormSubmit} className="flex pb-8 pt-10">
            <input
              className="block px-4 py-2 mt-2 mr-4 ml-8 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              name="name"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              className="block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              name="pincode"
              required="required"
              placeholder="Enter an pincode..."
              onChange={handleAddFormChange}
            />
            <div className="mt-2 mr-4 bg-white rounded-md focus:outline-none focus:ring focus:ring-opacity-40">
              <PhoneInput
                name="phoneNumber"
                required="required"
                placeholder="Enter a phone number..."
                value={inputValue}
                onChange={setInputValue}
              />
            </div>
            <input
              type="email"
              className="block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              required="required"
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
            />
            <button
              type="submit"
              className="group py-2.5 pr-7 pl-7 relative flex justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Add
            </button>
          </form>

          <div className="my-1 mx-8">
            <div className="overflow-x-auto">
              <form onSubmit={handleEditFormSubmit}>
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Pincode</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allusers?.map((contact) => (
                      <Fragment key={contact._id}>
                        {editContactId === contact._id ? (
                          <EditEmployeeData
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <EmployeeData
                            key={contact._id}
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
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Employees;
