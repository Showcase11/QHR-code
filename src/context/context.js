import axios from "axios";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { createContext } from "react";

const url = "https://apiqhr.qurinomsolutions.com/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selfAttendance, setSelfAttendance] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [profile, setProfile] = useState([]);
  const [forgot, setForgot] = useState([]);
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
  const [pendingData, setPendingData] = useState([]);
  const [status, setStatus] = useState("pending");
  const [action, setAction] = useState();
  const fetchAttendance = useCallback(async () => {
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
        fetchAttendance,
        pendingData,
        allusers,
        fetchUsers,
        departments,
        fetchDepartments,
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
