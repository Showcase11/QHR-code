import React from "react";

const EmployeeTable = () => {
  return (
    <div>
      <div className="overflow-x-auto h-full overflow-scroll">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Department</th>
              <th>Location</th>
              <th>Status</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Rahul Pradhan</td>
              <td>Web Development</td>
              <td>Odisha,Cuttack</td>
              <td>Working</td>
              <td>12/8/2020</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Rahul Pradhan</td>
              <td>Web Development</td>
              <td>Odisha,Cuttack</td>
              <td>Working</td>
              <td>12/8/2020</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Rahul Pradhan</td>
              <td>Web Development</td>
              <td>Odisha,Cuttack</td>
              <td>Working</td>
              <td>12/8/2020</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Rahul Pradhan</td>
              <td>DevOps</td>
              <td>Odisha,Cuttack</td>
              <td>Working</td>
              <td>12/8/2020</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Rahul Pradhan</td>
              <td>HR</td>
              <td>Odisha,Cuttack</td>
              <td>Working</td>
              <td>12/8/2020</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Rahul Pradhan</td>
              <td>Mobile App</td>
              <td>Odisha,Cuttack</td>
              <td>Working</td>
              <td>12/8/2020</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Department</th>
              <th>Location</th>
              <th>Status</th>
              <th>Joining Date</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
