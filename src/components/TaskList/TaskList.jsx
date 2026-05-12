import React from 'react'

const TaskList = ({data}) => {
  return (
    
      <div id='Tasklist' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap rounded-xl w-full h-[53%] mt-10'>
         <div className='h-full w-95 shrink-0 p-5 bg-red-400 rounded-xl'>
            <div className=' flex items-center justify-between'>
                <h3 className=' bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>{data?.tasks?.[0]?.taskDate}</h4>
            </div>
            <h2 className='text-3xl font-bold mt-7'>{data?.tasks?.[0]?.taskTitle}</h2>
            <p className='text-xm  mt-7'>{data?.tasks?.[0]?.taskDescription}
            </p>
         </div>
        
        <div className='h-full w-95 shrink-0 p-5 bg-green-400 rounded-xl'>
            <div className=' flex items-center justify-between'>
                <h3 className=' bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>{data?.tasks?.[1]?.taskDate}</h4>
            </div>
            <h2 className='text-3xl font-bold mt-7'>{data?.tasks?.[1]?.taskTitle}</h2>
            <p className='text-xm  mt-7'>{data?.tasks?.[1]?.taskDescription}</p>
         </div>
         <div className='h-full w-95 shrink-0 p-5 bg-blue-400 rounded-xl'>
            <div className=' flex items-center justify-between'>
                <h3 className=' bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>{data?.tasks?.[2]?.taskDate}</h4>
            </div>
            <h2 className='text-3xl font-bold mt-7'>{data?.tasks?.[2]?.taskTitle}</h2>
            <p className='text-xm  mt-7'>{data?.tasks?.[2]?.taskDescription}
            </p>
         </div>
         <div className='h-full w-95 shrink-0 p-5 bg-yellow-400 rounded-xl'>
            <div className=' flex items-center justify-between'>
                <h3 className=' bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>{data?.tasks?.[3]?.taskDate}</h4>
            </div>
            <h2 className='text-3xl font-bold mt-7'>{data?.tasks?.[3]?.taskTitle}</h2>
            <p className='text-xm  mt-7'>{data?.tasks?.[3]?.taskDescription}
            </p>
         </div>
         <div className='h-full w-95 shrink-0 p-5 bg-red-400 rounded-xl'>
            <div className=' flex items-center justify-between'>
                <h3 className=' bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
                <h4 className='text-sm'>{data?.tasks?.[4]?.taskDate}</h4>
            </div>
            <h2 className='text-3xl font-bold mt-7'>{data?.tasks?.[4]?.taskTitle}</h2>
            <p className='text-xm  mt-7'>{data?.tasks?.[4]?.taskDescription}
            </p>
         </div>
        
         {/* For Scroll Use ctrl + shift to move on x-axis  */}
        
      </div>
    
  )
}

export default TaskList
