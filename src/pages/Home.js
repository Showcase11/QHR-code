import React, { useEffect } from "react";
import { Layout } from "../components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useGlobalContext();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    if (!user?.isVisited) {
      navigate("/empprofile");
    }
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center flex-col">
        <h1 className="mt-10 text-[40px] font-semibold font-['Lato'] ">
          {user
            ? `Hello   ${user.name}   welcome to QHR ATTENDANCE PORTAL`
            : "LOGIN TO ACCESS QHR "}
        </h1>
      </div>
    </Layout>
  );
};

export default Home;
