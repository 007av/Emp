import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/tasklistNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TasklistNumber />
      <TaskList/>
    </div>
  )
}

export default EmployeeDashbord
