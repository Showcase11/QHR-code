import React, { useState, useEffect } from "react";
import DepartmentData from "../components/DepartmentData";
import DepartmentDataTable from "../components/DepartmentDataTable";
import { Layout } from "../components";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import toast from "react-hot-toast";
const Departments = () => {
  const { fetchDepartments, departments, loading } = useGlobalContext();
  const [formInputData, setformInputData] = useState({
    name: "",
    department_code: "",
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/department",
        formInputData
      );
      toast.success("Department Added Successfully");

      fetchDepartments();
    } catch (error) {
      console.log(error);
      toast.error(error?.response);
    }
  };
  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="pt-10">
            <DepartmentData
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            {loading ? (
              <h1>Loading....</h1>
            ) : departments.length === 0 ? (
              <h1>No records found</h1>
            ) : (
              <DepartmentDataTable tableData={departments} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Departments;
