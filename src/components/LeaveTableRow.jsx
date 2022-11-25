import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFullDate } from "../utils";
import { useGlobalContext } from "../context/context";

const LeaveTableRow = ({ item, index }) => {
  const [userInfo, setUserInfo] = useState();
  const { loading, setLoading } = useGlobalContext();
  useEffect(() => {
    const fetUser = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/employee/${item.user}`
      );

      setUserInfo(res.data);
      // console.log(res.data);
      setLoading(false);
    };
    fetUser();
  }, [item._id]);

  const actions = async (id, status) => {
    console.log(id, status);
    try {
      const res = await axios.put(`http://localhost:5000/api/leave/${id}`, {
        status,
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (loading || !userInfo) return <tr>Loading...</tr>;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3 cursor-pointer ">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://img.freepik.com/premium-photo/newborn-toddler-boy-laughing-bed_115594-1502.jpg?w=2000"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold ">{userInfo.name}</div>
            <div className="text-sm opacity-50">Intern</div>
          </div>
        </div>
      </td>
      <td>
        {userInfo.designation ? userInfo.designation : "Not yet"}
        <br />
        <span className="badge badge-ghost badge-sm">QHR,SHOWCASE</span>
      </td>
      <td>{item.subject}</td>

      <td>{getFullDate(item.createdAt)}</td>
      <td>{getFullDate(item.leaveDate)}</td>
      <td>{getFullDate(item.rejoinDate)}</td>
      <th>
        <div className="dropdown dropdown-left dropdown-end dropdown-hover">
          <label tabIndex={0} className="btn btn-xs btn-info text-white m-1">
            actions
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => actions(item._id, "approved")}>
              <a>Approve</a>
            </li>
            <li onClick={() => actions(item._id, "rejected")}>
              <a>Reject</a>
            </li>
          </ul>
        </div>
      </th>
    </tr>
  );
};

export default LeaveTableRow;
