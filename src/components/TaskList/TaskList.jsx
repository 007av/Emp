import React from 'react'
import AccepteTask from './AccepteTask'
import CompleTask from './CompleTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    
      <div id='Tasklist' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap rounded-xl w-full h-[53%] mt-10'>

       {
        data.tasks.map((elem)=>{
            if(elem.completed){
                return <CompleTask />
            }
            if(elem.active){
                return <AccepteTask />
            }
            if(elem.failed){
                return <FailedTask />
            }
            if(elem.newTask){
                return <NewTask />
            }
        })
       }
       
         {/* For Scroll Use ctrl + shift to move on x-axis  */}
        
      </div>
    
  )
}

export default TaskList
