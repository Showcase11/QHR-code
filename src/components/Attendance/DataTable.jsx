import React from "react";

const DataTable = () => {
  return (
    <div>
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
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Actions</th>
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
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pinimg.com/originals/a1/a3/8d/a1a38d2b837fa085563837207bce1ea3.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">FullStack</div>
                  </div>
                </div>
              </td>
              <td>
                12:20:00
                <br />
                <span className="badge badge-ghost badge-sm">12/2/2022</span>
              </td>
              <td>
                {" "}
                22:80:00
                <br />
                <span className="badge badge-ghost badge-sm">12/2/2022</span>
              </td>
              <th>
                <div className="dropdown dropdown-left dropdown-end dropdown-hover">
                  <label tabIndex={0} className="btn btn-sm m-1">
                    details
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
    </div>
  );
};

export default DataTable;
