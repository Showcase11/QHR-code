import React, { useState, useEffect, useContext, Children } from "react";
import { createContext } from "react";
import { useCallback } from "react";

const url = "http://localhost:5000/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selfAttendance, setSelfAttendance] = useState([]);
  return (
    <AppContext.Provider
      value={{
        loading,
        selfAttendance,
        setSelfAttendance,
        setLoading,
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
