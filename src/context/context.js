import axios from "axios";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
const url = "http://localhost:5001/api";
// const url = "https://apiqhr.qurinomsolutions.com/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selfAttendance, setSelfAttendance] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [profile, setProfile] = useState([]);
  const [forgot, setForgot] = useState([]);
  const [imageLink, setimageLink] = useState(null);
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password")
      ? JSON.parse(localStorage.getItem("password"))
      : null
  );
  const [jobData, setJobData] = useState([]);
  const [candidateData, setCandidateData] = useState([]);
  const [pendingData, setPendingData] = useState([]);
  const [status, setStatus] = useState("pending");
  const [action, setAction] = useState();
  const fetchLeaveApplications = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/leave/status/${status}`);
      setPendingData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [status]);
  const fetchJobData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/job`);
      console.log(response);
      setJobData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const fetchCandidateData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/candidate`);
      
      setLoading(false);
      setCandidateData(response.data);
    
    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  };
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/employee`);
      setAllusers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });
  const fetchDepartments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/department`);
      setDepartments(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });
  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const removeUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qhr_app");
    data.append("cloud_name", "djnhzfwld");

    return axios
      .post("https://api.cloudinary.com/v1_1/djnhzfwld/upload", data)
      .then((response) => setimageLink(response.data.url));
  };
  const updateStatus = async (props) => {
    console.log(props);

    try {
      setLoading(true);
      const res = await axios.put(`${url}/job/${props.id}`, {
        status: props.status,
      });
      console.log(res);
      setLoading(false);
      fetchJobData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const deleteJob = async (id) => {
    try {
      const res = await axios.delete(`${url}/job/${id}`);
      toast.success("JOB deleted successfully");
      console.log(res);
      fetchJobData();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        selfAttendance,
        setSelfAttendance,
        setLoading,
        saveUser,
        removeUser,
        user,
        setPassword,
        password,
        setStatus,
        profile,
        setProfile,
        forgot,
        setForgot,
        fetchLeaveApplications,
        pendingData,
        allusers,
        fetchUsers,
        departments,
        fetchDepartments,
        url,
        uploadImage,
        imageLink,
        fetchJobData,
        jobData,
        candidateData,
        fetchCandidateData,
        updateStatus,
        deleteJob,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
