import React from "react";
import { useGlobalContext } from "../../context/context";
const NormalTable = () => {
  const { selfAttendance } = useGlobalContext();
  console.log(selfAttendance);
  return (
    <div className="my-1 mx-8">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Clock In</th>
              <th>Clock Out</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {selfAttendance?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.date}</td>
                <td>{item.inTime}</td>
                <td>{item.outTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NormalTable;
