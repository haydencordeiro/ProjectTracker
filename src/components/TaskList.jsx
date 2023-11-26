import React from 'react'
import { FaPlus } from "react-icons/fa";
import TaskCard from './TaskCard';
import { HiDotsHorizontal } from "react-icons/hi";

const TaskList = ({tasks, taskListName}) => {
  return (
    <div className='rounded-lg bg-taskListBg flex-- w-64 m-2'>
      <div className='flex justify-between m-2'>

        <h1 className='mt-1 text-whiteText'>
          {taskListName}
        </h1>
        <div >
        <HiDotsHorizontal className='text-whiteText'/>
        </div>
      </div>
      {tasks.filter((task) => task.list === taskListName).map((task) =><TaskCard task={task}></TaskCard> )}



      

      <div className='bg-cyan-500 flex items-center hover:bg-red-500 mx-1 rounded-md text-whiteText'>
        <FaPlus className='rounded-sm mx-2 text-whiteText' />
        <h2>Click to add card</h2>
      </div>
      <div className='h-2'></div>
    </div>  )
}

export default TaskList