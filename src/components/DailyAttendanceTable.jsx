import React from "react";

import Row from "./Row";
const DailyAttendanceTable = ({ attendances }) => {
  return (
    <div className="overflow-x-auto">
      {attendances.length == 0 ? (
        <h1>No data found !</h1>
      ) : (
        <div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Department</th>
                <th>Date</th>
                <th>Clock In</th>
                <th>Clock Out</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {attendances?.map((item, index) => (
                <Row item={item} key={index} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DailyAttendanceTable;
