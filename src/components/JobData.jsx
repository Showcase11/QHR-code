import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const JobData = ({ contact, handleEditClick, handleDeleteClick }) => {
  const navigate = useNavigate();
  console.log(contact);
  return (
    <tr>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td>{contact.cv}</td>
    <td><select
                    name="isAdmin"
                    // onChange={handleEditFormChange}
                    className="select select-bordered select-md mx-2 max-w-xs"
                  >
                    <option selected>
                      Applied
                    </option>
                    <option value={false}>Screening</option>
                    <option value={false}>1st Interview</option>
                    <option value={false}>2nd Interview</option>
                    <option value={false}>Offered</option>
                    <option value={false}>Hired</option>
                    <option value={false}>Rejected</option>
                  </select></td>
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

export default JobData;
