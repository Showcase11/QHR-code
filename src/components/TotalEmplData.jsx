import React, { useEffect } from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
const TotalEmplData = () => {
  const params = useParams();
  console.log(params.id);
  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/employee/${params.id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <Layout>
      <div className="text-center pt-10">Hi Total Employee Data Here...</div>
    </Layout>
  );
};

export default TotalEmplData;
