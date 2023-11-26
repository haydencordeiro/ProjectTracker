import React from 'react'
import TaskList from './TaskList'
import SecondaryNavbar from './SecondaryNavbar'



const BoardMainComponent = () => {
  return (
    <div className="h-screen bg-green bg-fit bg-center bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1194/1ae72d8a416e9a846331da7083f0d4ba/photo-1694250990115-ca7d9d991b24.jpg')]">
      <SecondaryNavbar />

    <div className='flex overflow-auto '>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>
    <TaskList></TaskList>

    </div>
    </div>
  )
}

export default BoardMainComponent