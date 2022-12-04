import React, { useEffect, useState } from "react";
import axios from "axios";
import { getExactTime } from "../utils";
import { useGlobalContext } from "../context/context";
import Row from "./Row";
const DailyAttendanceTable = () => {
  const [attendances, setAttendances] = useState([]);
  const { loading, setLoading, url } = useGlobalContext();

  const getDailyAttendance = async () => {
    const res = await axios.get(`${url}/employee/getPerDayAttendance`);
    console.log(res.data);
    setAttendances(res.data);
  };

  useEffect(() => {
    getDailyAttendance();
  }, []);
  return (
    <div className="overflow-x-auto">
      {attendances.length == 0 ? (
        <h1>No one is Clockout Today</h1>
      ) : (
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Department</th>
              <th>ToDay date</th>
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
      )}
    </div>
  );
};

export default DailyAttendanceTable;
