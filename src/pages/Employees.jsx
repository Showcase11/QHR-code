// import React, { useState } from "react";
// import FormInput from "./FormInput";
// import Table from "./Table";
// import Layout from '../components/Layout';

// const Employees = () => {
 
//  const [tableData, setTableData] = useState([])
//  const [formInputData, setformInputData] = useState(
//      {
//      fullName:'',
//      emailAddress:'',
//      salary:''
//     }
//  );
 
//  const handleChange=(evnt)=>{  
//      const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
//     setformInputData(newInput)
//  }

//  const deleteTableRows = (index)=>{
//     console.log(tableData)
//     const rows = [...tableData]
//     rows.splice(index, 1);
//     setformInputData(rows);
// }

//  const handleSubmit= (evnt) =>{
//      evnt.preventDefault();
//      const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
//      if(checkEmptyInput)
//      {
//       const newData = (data)=>([...data, formInputData])
//       setTableData(newData);
//       const emptyInput= {fullName:'', emailAddress:'', salary:''}
//       setformInputData(emptyInput)
//      }
//  }  

//  return(
//     <Layout>
//         <CrudData />
//      <React.Fragment>
//      <div className="container">
//      <div className="row">
//          <div className="col-sm-8">
//          <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
//          <Table tableData={tableData} deleteTableRows={deleteTableRows} />
//          </div>
//          <div className="col-sm-4">

//          </div>
//      </div>
//     </div>
//      </React.Fragment>
//      </Layout>
//  );
// }
// export default Employees;

import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditTableRow";
import { Layout } from "../components";
import { PhoneInput } from "react-contact-number-input";

const Employees = () => {
  const [contacts, setContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
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

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: inputValue.countryCode+ '' +inputValue.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    // const emptyInput= {fullName:'', address:'', phoneNumber:'', email:''}
    // setAddFormData(emptyInput);
    // console.log(setAddFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
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
    <div className="app-container">
      <form onSubmit={handleAddFormSubmit} className='flex pb-8 pt-10'>
        <input
          className="block px-4 py-2 mt-2 mr-4 ml-8 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          className="block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
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
        <button type="submit" 
        className="group py-2.5 pr-7 pl-7 relative flex justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Add</button>
      </form>
      
      <div className="my-1 mx-8">
      <div className="overflow-x-auto">
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
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
        </form>
        </div>
        </div>
    </div>
    </Layout>
  );
};

export default Employees;