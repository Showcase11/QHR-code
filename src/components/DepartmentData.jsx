import React from "react";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const DepartmentData = ({  department, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{department.name}</td>
      <td>{department.department_code}</td>
      <td>
        <button
          type="button"
          className="pr-4"
          onClick={(event) => handleEditClick(event, department)}
        >
          <IoMdCreate />
        </button>
        <button type="button" onClick={() => handleDeleteClick(department.id)}>
        <IoTrashOutline />
        </button>
      </td>
    </tr>
  );
};

export default DepartmentData;