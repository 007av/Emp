import React, { createContext, useEffect, useState } from "react";
import { getLocalstorage, setLocolstorage } from "../utils/localstorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employeeData: [],
    adminData: [],
  });

  useEffect(() => {
    setLocolstorage();
    const { employeeData, adminData } = getLocalstorage();
    setUserData({ employeeData, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
