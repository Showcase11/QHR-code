import React, { useState, useEffect, useContext, Children } from "react";
import { createContext } from "react";
import { useCallback } from "react";

const url = "https://apiqhr.qurinomsolutions.com/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [selfAttendance, setSelfAttendance] = useState([]);
  const [user, setUser] = useState();
  return (
    <AppContext.Provider
      value={{
        loading,
        selfAttendance,
        setSelfAttendance,
        setLoading,
        setUser,
        user,
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
