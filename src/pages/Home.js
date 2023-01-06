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
        <div className="relative min-h-screen sm:min-h-screen xs:min-h-0 flex justify-center items-center overflow-hidden mt-5">
<h2 className="flex relative gap-2 text-2xl lg:text-6xl text-teal-400 font-extrabold leading-snug mt-20 xs:pt-24 md:pt-0 xs:text-xl sm:text-3xl max-sm:text-4xl md:text-5xl">
    <div className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">
        {user
            ? `Hello   ${user.name}`
            : "LOGIN TO ACCESS QHR"},
    </div> 
    <div className="bg-clip-text text-transparent capitalize bg-gradient-to-r from-teal-500 via-purple-600 to-purple-500">welcome to QHR Portal</div>
</h2>
<div className="absolute top-0 left-0 xs:hidden sm:block">
  <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50">
  </div>
  <div className="absolute w-64 h-64 mt-24 lg:ml-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50">
  </div>
  <div className="absolute w-64 h-64 ml-24 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50">
  </div>
</div>

<div className="absolute top-0 right-0 mt-52 mr-24 transform translate-y-64 -translate-x-64 xs:hidden sm:block">
  <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50">
  </div>
  <div className="absolute w-64 h-64 mt-24 ml-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-75">
  </div>
  <div className="absolute w-64 h-64 ml-24 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50">
  </div>
</div>
</div>
      {/* <div className="flex items-center justify-center flex-col">
        <h1 className="mt-10 text-[40px] font-semibold font-['Lato']">
          {user
            ? `Hello   ${user.name}   welcome to QHR ATTENDANCE PORTAL`
            : "LOGIN TO ACCESS QHR "}
        </h1>
      </div> */}
    </Layout>
  );
};

export default Home;
