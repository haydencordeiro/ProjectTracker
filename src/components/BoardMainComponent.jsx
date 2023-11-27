import React, { useRef, useState } from 'react'
import TaskList from './TaskList'
import SecondaryNavbar from './SecondaryNavbar'



const BoardMainComponent = () => {
  const [allTaskList, setAllTaskList] = useState([
    {
      "task": "Complete Project Proposal",
      "dueDate": "25 Nov",
      "list": "ToDo"
    },
    {
      "task": "Grocery Shopping",
      "dueDate": "26 Nov",
      "list": "ToDo"
    },
    {
      "task": "Send Birthday Gift",
      "dueDate": "30 Nov",
      "list": "ToDo"
    },
    {
      "task": "Review Meeting Notes",
      "dueDate": "28 Nov",
      "list": "InProgress"
    },
    {
      "task": "Submit Expense Report",
      "dueDate": "02 Dec",
      "list": "InProgress"
    },
    {
      "task": "Read Chapter 5",
      "dueDate": "01 Dec",
      "list": "Completed"
    },
    {
      "task": "Call Mom",
      "dueDate": "29 Nov",
      "list": "Completed"
    },
    {
      "task": "Plan Weekend Trip",
      "dueDate": "27 Nov",
      "list": "Pending"
    },
    {
      "task": "Exercise Routine",
      "dueDate": "Daily",
      "list": "Pending"
    },
    {
      "task": "Learn New Recipe",
      "dueDate": "03 Dec",
      "list": "ToDo"
    }
  ]
  )


  const [taskList, setTaskList] = useState(['ToDo', 'InProgress', 'Pending', 'Completed'])
  return (
    <div className="h-screen bg-green bg-fit bg-center bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1194/1ae72d8a416e9a846331da7083f0d4ba/photo-1694250990115-ca7d9d991b24.jpg')]">
      <SecondaryNavbar />

      <div className='flex overflow-auto '>
        {taskList.map((task, index) =>
          <TaskList taskListName={task} tasks={allTaskList} key={index}></TaskList>
        )}


      </div>
    </div>
  )
}

export default BoardMainComponent