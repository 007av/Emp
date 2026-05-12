import React from 'react'

const TasklistNumber = ({data}) => {
  return (
    <div className=' flex mt-10 justify-between gap-5 screen '>
      <div className='p-10 w-[45%] bg-red-400 rounded-xl'>
      <h2 className='text-3xl font-bold'>{data.taskNumbers.newTask}</h2>
      <h3 className='text-3xl font-bold'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-blue-400 rounded-xl'>
      <h2 className='text-3xl font-bold'>{data.taskNumbers.completed}</h2>
      <h3 className='text-3xl font-bold'>Completed Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-green-400 rounded-xl'>
      <h2 className='text-3xl font-bold'>{data.taskNumbers.active}</h2>
      <h3 className='text-3xl font-bold'>Accepted Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-yellow-500 rounded-xl'>
      <h2 className='text-3xl font-bold'>{data.taskNumbers.failed}</h2>
      <h3 className='text-3xl font-bold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TasklistNumber
