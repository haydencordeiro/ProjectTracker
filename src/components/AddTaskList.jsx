import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BsClock } from 'react-icons/bs';
import { MdClose } from "react-icons/md";




const AddTaskList = ({AddNewTaskList}) => {
  const [addingNewTask, setAddingNewTaskList] = useState(false)
  const [inputText, setInputText] = useState('')



  const AddingTaskList = () => {
    return (
      <div className='flex flex-col h-20 bg-navbarBackground min-w-64 mr-4 flex-shrink-0 rounded-md mt-2'>
        <div
          className='flex flex-col bg-taskCardBg rounded-lg m-1 h-10'
        >
          <input
            className='block p-2 pb-3 bg-taskCardBg outline-none text-taskCardText'
            placeholder='Enter a title for this card...'
            value={inputText}
            addingnewtask={addingNewTask.toString()}
            onChange={event => setInputText(event.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                AddNewTaskList(inputText)
                setAddingNewTaskList(false);
                setInputText('')
              }
            }}
          />
        </div>

        <div className='flex items-center mx-1 rounded-md text-whiteText' >
          <h2 className='text-sm text-navbarBackground font-semibold rounded-sm py-1 px-2 p-3 mb-1 bg-menuButtonColor'
            onClick={() => { setAddingNewTaskList(false); AddNewTaskList(inputText); setInputText('') }}>
            Add card</h2>
          <MdClose className='rounded-sm mx-2 text-taskCardText text-lg z-10' onClick={() => { setInputText(''); setAddingNewTaskList(false) }} />
        </div>
      </div>
    )
  }

  return (


    addingNewTask ?
      AddingTaskList() :



      <div className={`flex flex-row h-10 min-w-64 mt-2 mr-4 rounded-md flex-shrink-0 bg-addNewListBg items-center hover:bg-transparent`}
        onClick={() => { setAddingNewTaskList(true) }} >
        <FaPlus className='rounded-sm mx-2 ml-4 text-addNewListText text-sm' />
        <h2 className='text-sm text-addNewListText p-2'>Add a card</h2>
      </div >

  )
}

export default AddTaskList