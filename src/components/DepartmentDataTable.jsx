import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Table({ tableData }) {
  return (
    <div className="my-1 mx-8 mt-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-2/4">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/deptemployee/${data._id}`}>{data.name}</Link>
                  </td>
                  <td>{data.department_code}</td>
                  <td>
                    <button type="button" className="mr-5">
                      <IoMdCreate />
                    </button>
                    <button type="button" className="mr-5">
                      <IoTrashOutline />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
