import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const EmployeeData = ({ contact, handleEditClick, handleDeleteClick }) => {
  const navigate = useNavigate();
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
        <button
          type="button"
          className="mr-5"
          onClick={() => handleDeleteClick(contact._id)}
        >
          <IoTrashOutline />
        </button>

        <IoEye
          className="cursor-pointer"
          onClick={() => navigate(`/employee/${contact._id}`)}
        />
      </td>
    </tr>
  );
};

export default EmployeeData;
