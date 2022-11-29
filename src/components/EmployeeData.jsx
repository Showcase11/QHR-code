import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';
import TotalEmplData from "./TotalEmplData";

const EmployeeData = ({ contact, handleEditClick, handleDeleteClick, handleEmpdataClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
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
