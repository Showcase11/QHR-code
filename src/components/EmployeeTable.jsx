import React from "react";
import { getFullDate } from "../utils/index";
const EmployeeTable = ({ users }) => {
  return (
    <div>
      <div className="overflow-x-auto h-full overflow-scroll">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>S.n</th>
              <th>Name</th>
              <th>Department</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Pincode</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.department ? data.department : "not available"}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.email}</td>
                <td>{data.pincode}</td>
                <td>{getFullDate(data.joined)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>s.n</th>
              <th>Name</th>
              <th>Department</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Pincode</th>
              <th>Joining Date</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
