import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashbord/EmployeeDashbord'
import AdminDashbord from './components/Dashbord/AdminDashbord'
import { getLocalstorage, setLocolstorage } from './utils/localstorage'



const App = () => {

useEffect(() => {
  // setLocolstorage();
  getLocalstorage();
}, []);

  return (
    <>
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashbord/> */}
    
    </>
  )
}

export default App
