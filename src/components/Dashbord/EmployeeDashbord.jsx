import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/tasklistNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = ({data}) => {
  console.log(data);
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header data={data}/>
      <TasklistNumber data={data} />
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashbord
