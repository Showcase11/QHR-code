import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const EditDepartmentTable = ({
    editDeptData,
        handleEditFormChange,
        handleCancelClick,
      }) => {
    return (
        <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editDeptData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a code..."
          name="department_code"
          value={editDeptData.department_code}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className='pr-5'><IoMdCheckmark /></button>
        <button type="button" onClick={handleCancelClick}>
        <IoMdClose />
        </button>
      </td>
    </tr>
    );
};

export default EditDepartmentTable;