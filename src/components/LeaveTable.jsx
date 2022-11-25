import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaveTableRow from "./LeaveTableRow";

const LeaveTable = () => {
  const [pendingData, setPendingData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/leave/status/pending"
        );
        setPendingData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Department</th>
            <th>Reson</th>
            <th>Apply Date </th>
            <th>Leave Date</th>
            <th>Rejoin Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {pendingData.map((item, index) => (
            <LeaveTableRow key={index} index={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;
