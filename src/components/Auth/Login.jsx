import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

const submitHandler = (e)=>{
  e.preventDefault()
  console.log("Form submited")
  // console.log("email is: "+ email)
  // console.log("Password is: "+ password)

  setEmail("")
  setPassword("")
}



  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className=' border-2 p-20 border-emerald-200 rounded-xl'>
      <form onSubmit={(e)=>submitHandler(e)} className=' flex flex-col items-center justify-center'>
        <input
        value={email}
         required type="email" placeholder="Email" className=' outline-none border-2 border-emerald-200 rounded-full py-3 px-5 placeholder-gray-400' 
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         />
        <input 
        required type="password" placeholder="Password" className=' outline-none border-2 border-emerald-200 rounded-full mt-3 py-3 px-5 placeholder-gray-400'
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        <button type="submit" className='outline-none border-2 bg-emerald-400 rounded-full mt-3 py-3 px-5'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
