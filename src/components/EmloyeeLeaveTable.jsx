import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { getFullDate } from "../utils";
const EmloyeeLeave = ({ isClick }) => {
  const { user, loading, setLoading, url } = useGlobalContext();
  const [leaveData, setLeaveData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${url}/leave/user/${user._id}`);
        setLoading(true);
        setLeaveData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchUser();
  }, [isClick]);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  const pending = `bg-yellow-200  text-yellow-700`;
  const approved = `bg-green-200  text-green-700`;
  const rejected = `bg-red-200 text-red-700`;
  if (leaveData.length === 0) {
    return <h1 className="mt-5 text-lg font-roboto">No record found !</h1>;
  }
  return (
    <div className="overflow-x-auto">
      <h1 className="my-8 text-center text-lg font-semibold">
        Your All Previous Leave Applications
      </h1>
      <table className="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Subject</th>
            <th>Apply Date</th>
            <th>Leave Date</th>
            <th>Rejoining Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {leaveData.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{item.subject}</td>
              <td>{getFullDate(item.createdAt)}</td>
              <td>{getFullDate(item.leaveDate)}</td>
              <td>{getFullDate(item.rejoinDate)}</td>
              <td>
                <p
                  className={`${
                    item.status === "pending"
                      ? pending
                      : item.status === "rejected"
                      ? rejected
                      : approved
                  } inline-block text-sm font-semibold capitalize px-5 py-2 rounded-xl`}
                >
                  {item.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmloyeeLeave;
