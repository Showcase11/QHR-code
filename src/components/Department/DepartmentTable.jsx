import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentTable = ({ departments }) => {
  const [departmentData, setDepartmentData] = useState();

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead className="font-semibold text-lg">
          <tr>
            <th></th>
            <th>Name</th>
            <th>CODE</th>
            <th>NO. OF EMPLOYEE</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {departments.map((data, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.department_code}</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
