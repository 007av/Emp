import React from 'react'

const TasklistNumber = () => {
  return (
    <div className=' flex mt-10 justify-between gap-5 screen '>
      <div className='p-10 w-[45%] bg-red-400 rounded-xl'>
      <h2 className='text-3xl font-bold'>0</h2>
      <h3 className='text-3xl font-bold'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-blue-400 rounded-xl'>
      <h2 className='text-3xl font-bold'>0</h2>
      <h3 className='text-3xl font-bold'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-green-400 rounded-xl'>
      <h2 className='text-3xl font-bold'>0</h2>
      <h3 className='text-3xl font-bold'>New Task</h3>
      </div>

      <div className='p-10 w-[45%] bg-yellow-500 rounded-xl'>
      <h2 className='text-3xl font-bold'>0</h2>
      <h3 className='text-3xl font-bold'>New Task</h3>
      </div>
    </div>
  )
}

export default TasklistNumber
