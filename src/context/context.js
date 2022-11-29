import axios from "axios";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { createContext } from "react";

const url = "http://localhost:5000/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selfAttendance, setSelfAttendance] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
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
  return (
    <AppContext.Provider
      value={{
        loading,
        selfAttendance,
        setSelfAttendance,
        setLoading,
        setUser,
        user,
        setStatus,
        fetchAttendance,
        pendingData,
        allusers,
        fetchUsers,
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
