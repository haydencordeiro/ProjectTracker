import React from 'react'
import { FaPlus } from "react-icons/fa";
import TaskCard from './TaskCard';
const TaskList = () => {
  return (
    <div className='rounded-lg bg-red-700 maw-52 flex-none w-64 m-2'>
      <div className='flex justify-between m-2'>

        <h1 className='mt-1'>
          ToDo
        </h1>
        <div>
          ...
        </div>
      </div>
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>


      

      <div className='bg-cyan-500 flex items-center hover:bg-red-500 mx-1 rounded-md'>
        <FaPlus className='rounded-sm mx-2' />
        <h2>Click to add card</h2>
      </div>
      <div className='h-2'></div>
    </div>  )
}

export default TaskList