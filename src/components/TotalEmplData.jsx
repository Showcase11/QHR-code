import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
const TotalEmplData = () => {
  const [data, setData] = useState();
  const { url } = useGlobalContext();
  const params = useParams();
  console.log(params.id);
  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(`${url}/employee/${params.id}`);
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
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
