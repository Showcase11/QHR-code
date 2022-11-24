import React from "react";
import { useGlobalContext } from "../../context/context";
import { formatTime } from "../../utils";
const NormalTable = () => {
  const getFullDate = (data) => {
    const date = new Date(data);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getExactTime = (data) => {
    const today = new Date(data);

    return formatTime(
      today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
    );
  };

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
                <td>{getFullDate(item.date)}</td>
                <td>{getExactTime(item.inTime)}</td>
                <td>{getExactTime(item.outTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NormalTable;
