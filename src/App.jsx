import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashbord/EmployeeDashbord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { getLocalstorage, setLocolstorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authData = useContext(AuthContext);
  console.log(authData);
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //       setLoggedInUser(JSON.parse(loggedInUser.data));
  //     }
  //   }
  // }, [authData]);

  useEffect(() => {
    // localStorage.clear();
    const loginwalauser = localStorage.getItem("loggedInUser");
    if (loginwalauser) {
      const userData = JSON.parse(loginwalauser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  // console.log(user);

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeeData.find(
        (e) => email == e.email && password == e.password,
      );
       if (employee) {

      setUser("employee");

      setLoggedInUser(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee
        })
      );

    }
    } else {
      alert("Invalid Credentials..!");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}

      {user == "admin" ? (
        <AdminDashbord />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUser} />
      ) : null}
    </>
  );
};

export default App;
