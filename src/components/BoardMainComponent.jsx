import React from 'react'
import TaskList from './TaskList'



const BoardMainComponent = () => {
  return (
    <div className='flex overflow-auto'>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>

    </div>
  )
}

export default BoardMainComponent