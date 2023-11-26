import React from 'react'
import { BsClock } from "react-icons/bs";

const TaskCard = ({task}) => {
  return (
    <div className='flex flex-col bg-taskCardBg rounded-lg m-1 p-2' draggable onDragStart={() => {}}>
    <h1 className='ml-1 text-sm text-taskCardText mb-1'>{task.task}</h1>
    <div className='text-xs p-1 bg-overdueRed w-16 justify-center items-center rounded-sm mb-1 ml-1 text-overdueRedText flex'><BsClock  className='mr-1'/>
{task.dueDate}</div>
  </div>  )
}

export default TaskCard