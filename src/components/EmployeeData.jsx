import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';

const EmployeeData = ({ contact, handleEditClick, handleDeleteClick, handleEmpdataClick }) => {
  console.log(contact);
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.pincode}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td className="flex">
        <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
        <Link to="/employee/:id" onClick={() => handleEmpdataClick(contact.id)}>
          <IoEye />
        </Link>
      </td>
    </tr>
    
  );
};

export default EmployeeData;
