import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashbord/EmployeeDashbord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { getLocalstorage, setLocolstorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  console.log(authData);
useEffect(()=>{
if(authData){
    const loggedInUser = localStorage.getItem('loggedInUser');
  }
},[authData])
  

  
  

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log("This is Admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    } else if ( authData && authData.employeeData.find((e)=> email == e.email && password == e.password)) {
      setUser("employee");
      console.log("This is Employee");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid Credentials..!");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}

      {user == "admin" ? <AdminDashbord /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
