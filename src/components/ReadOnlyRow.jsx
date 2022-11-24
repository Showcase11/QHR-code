import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
