import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const EditCandidateRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
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
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an createdAt..."
          name="createdAt"
          value={editFormData.createdAt}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an resume..."
          name="resume"
          value={editFormData.resume}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          name="status"
          // onChange={handleEditFormChange}
          className="select select-bordered select-md mx-2 max-w-xs"
          value={editFormData.status}
          onChange={handleEditFormChange}
        >
          <option>Applied</option>

          <option value="round1">1st Interview</option>
          <option value="round2">2nd Interview</option>
          <option value="round3">3rd Interview</option>
          <option value="hired">Hired</option>
          <option value="rejected">Rejected</option>
        </select>
      </td>
      <td>
        <select
          name="job"
          // onChange={handleEditFormChange}
          className="select select-bordered select-md mx-2 max-w-xs"
          value={editFormData.job}
          onChange={handleEditFormChange}
        >
          <option value="">All Departments</option>
          <option value="FOP">Finance</option>
          <option value="HR">HR</option>
          <option value="UIX">UI/UX</option>
          <option value="FOP">Finance Operations</option>
          <option value="MDV">Mobile Development</option>
          <option value="DMR">Degital Marketing</option>
          <option value="GPS">Graphics Design</option>
          <option value="COT">Content Team</option>
          <option value="SAT">Sales Team</option>
          <option value="WEB">Web Development</option>
          <option value="DVS">DEVOPS</option>
        </select>
      </td>
      <td>
        <button type="submit" className="mr-5" onClick={handleEditFormSubmit}>
          <IoMdCheckmark />
        </button>
        <button type="button" onClick={handleCancelClick}>
          <IoMdClose />
        </button>
      </td>
    </tr>
  );
};

export default EditCandidateRow;
