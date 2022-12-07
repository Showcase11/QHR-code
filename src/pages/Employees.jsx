import React, { useState, Fragment, useEffect } from "react";
import EmployeeData from "../components/EmployeeData";
import EditEmployeeData from "../components/EditEmployeeData";
import { Layout } from "../components";
import { PhoneInput } from "react-contact-number-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../assets/employee.json";
import toast from "react-hot-toast";
import { useGlobalContext } from "../context/context";
const Employees = () => {
  const navigate = useNavigate();
  const { allusers, fetchUsers, loading, user, url } = useGlobalContext();
  const [contacts, setContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [addFormData, setAddFormData] = useState({
    name: "",
    department: "",
    phoneNumber: "",
    email: "",
    isAdmin: false,
    joined: "",
  });
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const [editFormData, setEditFormData] = useState({
    name: "",
    department: "",
    phoneNumber: "",
    email: "",
    id: "",
    isAdmin: false,
    joined: "",
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
      department: addFormData.department,
      isAdmin: addFormData.isAdmin,
      joined: addFormData.joined,
    };
    console.log(newContact);
    try {
      const res = await axios.post(
        `${url}/employee/signup`,

        newContact
      );
      toast.success("User added successfully");
      console.log(res.data);
      fetchUsers();
    } catch (error) {
      toast.error(error.response.data?.message);
      console.log(error);
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      name: editFormData.name,
      department: editFormData.department,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      isAdmin: editFormData.isAdmin,
    };
    // console.log(editedContact);
    try {
      const res = await axios.put(
        `${url}/employee/${editFormData.id}`,
        editedContact
      );
      console.log(res);
      toast.success("Updated");
      fetchUsers();
    } catch (error) {
      toast.error("Something went wrong");
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
      department: contact.department,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      id: contact._id,
      isAdmin: contact.isAdmin,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async (contactId) => {
    console.log(contactId);
    try {
      const res = await axios.delete(`${url}/employee/${contactId}`);
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Layout>
      {loading ? (
        <h1>Loadding...</h1>
      ) : (
        <div className="app-container  mb-12">
          <div className="flex md:px-16 px-4 items-center justify-between my-3 ">
            <div className="flex-1">
              <h1 className="text-xl font-roboto my-2  font-semibold">
                Add new employees
              </h1>
              <form
                onSubmit={handleAddFormSubmit}
                className="flex flex-wrap flex-col w-auto items-start gap-2 justify-start pb-8 pt-5 border-2 border-gray-200 rounded-xl shadow-sm px-5 "
              >
                <input
                  className="block w-full px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  name="name"
                  required="required"
                  placeholder="Enter a name..."
                  onChange={handleAddFormChange}
                />
                <input
                  className="block w-full px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  name="department"
                  required="required"
                  placeholder="Department Name"
                  onChange={handleAddFormChange}
                />
                <input
                  type="email"
                  className=" w-full block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  name="email"
                  required="required"
                  placeholder="Enter an email..."
                  onChange={handleAddFormChange}
                />
                <div className="flex gap-1 items-center">
                  <div className="mt-2 mr-4 bg-white rounded-md focus:outline-none focus:ring focus:ring-opacity-40">
                    <PhoneInput
                      name="phoneNumber"
                      required="required"
                      placeholder="Enter a phone number..."
                      value={inputValue}
                      onChange={setInputValue}
                    />
                  </div>

                  <select
                    name="isAdmin"
                    onChange={handleAddFormChange}
                    className="select select-bordered select-md mx-2 max-w-xs"
                  >
                    <option disabled selected>
                      Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label text-sm font-roboto">
                    Enter Join date
                  </label>
                  <input
                    required
                    type="date"
                    name="joined"
                    className="w-full block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={handleAddFormChange}
                  />
                </div>
                <button
                  type="submit"
                  className="group py-2.5  pr-7 pl-7 relative right-0 flex justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Add
                </button>
              </form>
            </div>
            {/* Annnimation */}
            <div className="flex-1 md:block hidden">
              <Lottie options={defaultOptions} width="75%" height="100%" />
            </div>
          </div>
          <div className="my-4 mx-8">
            <div className="overflow-x-auto">
              <form onSubmit={handleEditFormSubmit}>
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Is Admin</th>
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
