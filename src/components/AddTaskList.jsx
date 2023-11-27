import React, {useState} from 'react'
import { FaPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BsClock } from 'react-icons/bs';
import { MdClose } from "react-icons/md";


const AddTaskList = () => {
    const [addingNewTask, setAddingNewTaskList] = useState(false)
    const [inputText, setInputText] = useState('')
  return (
    <div className={`flex flex-row h-10 w-64 mt-2 rounded-md bg-addNewListBg items-center hover:bg-transparent`}
    onClick={() => {setAddingNewTaskList(true)}} >
      <FaPlus className='rounded-sm mx-2 ml-4 text-addNewListText text-sm' />
      <h2 className='text-sm text-addNewListText p-2'>Add a card</h2>

    {/* <input
          className={`${addingNewTask ? 'block p-2 pb-8' : 'hidden'} bg-taskCardBg outline-none text-taskCardText`}
          placeholder='Enter a title for this card...'
          value={inputText}
          addingnewtask={addingNewTask.toString()}
          onChange={event => setInputText(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              AddCard({ 'list': taskListName, 'task': inputText });
              setAddingNewTask(false);
            }
          }}
        /> */}
      {/* {addingNewTask ?
        <div className='bg-cyan-500 flex items-center hover:bg-red-500 mx-1 rounded-md text-whiteText' >
          <h2 className='text-sm text-navbarBackground font-semibold rounded-sm py-1 px-2 bg-menuButtonColor'
            onClick={() => { setAddingNewTaskList(false); }}>
            Add card</h2>
          <MdClose className='rounded-sm mx-2 text-taskCardText text-lg z-10' onClick={() => { setInputText(''); setAddingNewTaskList(false) }} />
        </div> :
        <div className='bg-cyan-500 flex items-center hover:bg-red-500 mx-1 rounded-md text-whiteText hover:bg-backgroundNeutralHovered'
        onClick={() => { setInputText(''); setAddingNewTaskList(true) }} >
          <FaPlus className='rounded-sm mx-2 text-taskCardText text-sm' />
          <h2 className='text-sm text-taskCardText p-2'>Add a card</h2>
        </div>
      } */}
    </div>  )
}

export default AddTaskList