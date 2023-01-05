import React, { useState, Fragment, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { Layout } from "../components";
import axios from "axios";
import toast from "react-hot-toast";
import DepartmentData from "../components/DepartmentData";
import EditDepartmentTable from "../components/EditDepartmentTable";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const { departments, fetchDepartments, loading, url, user } =
    useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const [addFormData, setAddFormData] = useState({
    name: "",
    department_code: "",
  });

  const [editDeptData, setEditDeptData] = useState({
    name: "",
    department_code: "",
  });

  const [editDepartmentId, setEditDepartmentId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editDeptData };
    newFormData[fieldName] = fieldValue;

    setEditDeptData(newFormData);
  };

  const handleAddFormSubmit = async (evnt) => {
    evnt.preventDefault();
    const newContact = {
      name: addFormData.name,
      department_code: addFormData.department_code,
    };
    try {
      const res = await axios.post(`${url}/department`, newContact);
      toast.success("Department Added Successfully");
      console.log(res);
      fetchDepartments();
    } catch (error) {
      console.log(error);
      toast.error(error?.response);
    }
  };
  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedDepartment = {
      name: editDeptData.name,
      department_code: editDeptData.department_code,
    };

    try {
      const res = await axios.put(
        `${url}/department/${editDeptData.id}`,
        editedDepartment
      );
      toast.success("Updated");
      fetchDepartments();
    } catch (error) {
      toast.error("Something went wrong");
    }
    setEditDepartmentId(null);
  };

  const handleEditClick = (event, department) => {
    event.preventDefault();
    setEditDepartmentId(department._id);

    const formValues = {
      name: department.name,
      department_code: department.department_code,
      id: department._id,
    };
    setEditDeptData(formValues);
  };

  const handleCancelClick = () => {
    setEditDepartmentId(null);
  };

  const handleDeleteClick = async (departmentId) => {
    try {
      const res = await axios.delete(`${url}/department/${departmentId}`);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    fetchDepartments();
  };
  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <Layout>
      {loading ? (
        <h1>Loadding...</h1>
      ) : (
        <div className="container">
          <form onSubmit={handleAddFormSubmit} className="lg:w-[50%] sm:w-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 max-sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-5">
            <input
              type="text"
              name="name"
              className="block px-4 py-2 mt-2 ml-8 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="department_code"
              className="block px-4 py-2 mt-2 ml-8 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
              required="required"
              placeholder="Enter a code..."
              onChange={handleAddFormChange}
            />
            <button
              type="submit"
              className="group py-2.5 pr-7 pl-7 sm:ml-8 relative flex justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
          <div className="my-1 mx-8 mt-10">
            <div className="overflow-x-auto">
              <form onSubmit={handleEditFormSubmit}>
                <table className="table table-zebra w-2/4">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments.map((department) => (
                      <Fragment key={department._id}>
                        {editDepartmentId === department._id ? (
                          <EditDepartmentTable
                            editDeptData={editDeptData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <DepartmentData
                            department={department}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                          />
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Departments;
