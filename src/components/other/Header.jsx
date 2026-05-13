import React from 'react'
import { useState,useEffect } from 'react'

const Header = ({data}) => {
  const [userName, setUserName] = useState("");

  
  useEffect(() => {
    if (data) {
      setUserName(data.firstName);
    }
  }, [data]);


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> {userName} 👋</span></h1>
      <button className='bg-red-600 px-5 py-2 rounded text-lg font-bold'>Log out</button>
    </div>
  )
}

export default Header
