import React, { useState, useEffect } from "react";
import axios from "axios";
import LeaveTableRow from "./LeaveTableRow";
import { useGlobalContext } from "../context/context";
const LeaveTable = () => {
  const [action, setAction] = useState();
  const { pendingData, fetchAttendance } = useGlobalContext();
  useEffect(() => {
    fetchAttendance();
  }, [action]);

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
            <LeaveTableRow
              key={index}
              index={index}
              item={item}
              setAction={setAction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;
