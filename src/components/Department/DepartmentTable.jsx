import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentTable = () => {
  const [departmentData, setDepartmentData] = useState();

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await axios.get(`http://localhost:5000/api/departments/}`);
      setDepartmentData(res.data);
    };
  }, []);

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
          <tr>
            <th>1</th>
            <td>Web Development</td>
            <td>WEBDEV</td>
            <td>12</td>
          </tr>
          {/* <!-- row 2 --> */}
          <tr>
            <th>2</th>
            <td>Mobile Dev</td>
            <td>MOVDEV</td>
            <td>06</td>
          </tr>
          {/* <!-- row 3 --> */}
          <tr>
            <th>3</th>
            <td>HR</td>
            <td>HR</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
