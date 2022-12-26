import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const EditJobData = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  // console.log(editFormData);
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="cv"
          value={editFormData.cv}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <select
                    name="isAdmin"
                    onChange={handleEditFormChange}
                    className="select select-bordered select-md mx-2 max-w-xs"
                  >
                    <option disabled selected>
                      Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
      </td>
      <td>
        <button type="submit" className="mr-3.5"><IoMdCheckmark /></button>
        <button type="button" onClick={handleCancelClick}>
          <IoMdClose />
        </button>
      </td>
    </tr>
  );
};

export default EditJobData;
