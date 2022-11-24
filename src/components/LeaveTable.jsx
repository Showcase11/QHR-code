import React from "react";

const LeaveTable = () => {
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
            <th>Leave Date</th>
            <th>Rejoin Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
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
                  <div className="font-bold ">Rahul Pradhan</div>
                  <div className="text-sm opacity-50">Intern</div>
                </div>
              </div>
            </td>
            <td>
              FULL STACK Developer
              <br />
              <span className="badge badge-ghost badge-sm">QHR,SHOWCASE</span>
            </td>
            <td>Semester Exam</td>
            <td>20-03-2022</td>
            <td>30-03-2022</td>
            <th>
              <div className="dropdown dropdown-left dropdown-end dropdown-hover">
                <label
                  tabIndex={0}
                  className="btn btn-xs btn-info text-white m-1"
                >
                  actions
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Approve</a>
                  </li>
                  <li>
                    <a>Reject</a>
                  </li>
                </ul>
              </div>
            </th>
          </tr>
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
                  <div className="font-bold ">Sahitya Mahadevpuram</div>
                  <div className="text-sm opacity-50">FTE</div>
                </div>
              </div>
            </td>
            <td>
              Web Developer
              <br />
              <span className="badge badge-ghost badge-sm">QHR,QS</span>
            </td>
            <td>Health Issue</td>
            <td>20-03-2022</td>
            <td>30-03-2022</td>
            <th>
              <div className="dropdown dropdown-left dropdown-end dropdown-hover">
                <label
                  tabIndex={0}
                  className="btn btn-xs btn-info text-white m-1"
                >
                  actions
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Approve</a>
                  </li>
                  <li>
                    <a>Reject</a>
                  </li>
                </ul>
              </div>
            </th>
          </tr>
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
                  <div className="font-bold ">Sukanya</div>
                  <div className="text-sm opacity-50">FTE</div>
                </div>
              </div>
            </td>
            <td>
              Web Developer
              <br />
              <span className="badge badge-ghost badge-sm">QHR,SHOWCASE</span>
            </td>
            <td>Marriage</td>
            <td>20-11-2022</td>
            <td>30-11-2022</td>
            <th>
              <div className="dropdown dropdown-left dropdown-end dropdown-hover">
                <label
                  tabIndex={0}
                  className="btn btn-xs btn-info text-white m-1"
                >
                  actions
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Approve</a>
                  </li>
                  <li>
                    <a>Reject</a>
                  </li>
                </ul>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;
