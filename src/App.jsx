import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashbord/EmployeeDashbord'
import AdminDashbord from './components/Dashbord/AdminDashbord'
import { getLocalstorage, setLocolstorage } from './utils/localstorage'



const App = () => {

// useEffect(() => {
//   // setLocolstorage();
//   getLocalstorage();
// }, []);

const [user, setUser] = useState(null);

const handelLogin=(email,password)=>{
if(email == "admin@me.com" && password == "123"){
  setUser('admin');
  console.log("This is Admin");
  
}
else if(email == "employee@me.com" && password == "123"){
  setUser('employee');
  console.log("This is Employee");
}
else{
  alert("Invalid Credentials..!")
}

}


  return (
    <>
    {!user ? <Login handelLogin={handelLogin} /> : ""}
    
    {user == 'admin' ? <AdminDashbord/> :<EmployeeDashboard />}
   
    
    </>
  )
}

export default App
