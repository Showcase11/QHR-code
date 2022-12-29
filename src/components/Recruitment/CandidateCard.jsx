import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const CandidateCard = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.createdAt}</td>
    <td>{contact.resume}</td>
    <td>{contact.status}</td>
    <td>
      <button
        type="button"
        onClick={(event) => handleEditClick(event, contact)}
      >
        <IoMdCreate className="mr-3.5" />
      </button>
      <button type="button" onClick={() => handleDeleteClick(contact.id)}>
        <IoTrashOutline />
      </button>
    </td>
  </tr>
  );
};

export default CandidateCard;
