import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BsClock } from 'react-icons/bs';

const TaskList = forwardRef(({ tasks, taskListName, handleSort, AddCard }, ref) => {
  const [allTaskList, setAllTaskList] = useState([]);
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    setAllTaskList(tasks.filter((task) => task.list === taskListName));
  }, [tasks, taskListName]);

  function dueDateCalc(dueDate){
    const [day, month] = dueDate.split(' ');
    const dueDateObject = new Date(new Date().getFullYear(), getMonthIndex(month), parseInt(day), 23, 59, 59);
  
    function getMonthIndex(month) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months.indexOf(month);
    }

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
  
    const timeDifference = dueDateObject.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference > 5 ){
      return 'text-taskCardText'
    }
    if(daysDifference < 0){
      return 'bg-overdueRed text-overdueRedText '
    }
    return 'bg-warningYellow  text-approachingDueDateText'
  }




  return (
    <div className='rounded-lg bg-taskListBg flex-- w-64 m-2 flex-shrink max-h-[559px] overflow-auto'
    
    draggable={true}
    onDragStart={() => {
      ref.current.dragListName = taskListName;
    }}
    onDragEnter={() => {
      ref.current.draggedOverListName = taskListName;
    }}
    onDragEnd={() => {
      handleSort();
    }}
    onDragOver={(e) => {
      e.preventDefault();
    }}>
      <div className='flex justify-between m-2'>
        <h1 className='mt-1 text-whiteText'>{taskListName}</h1>
        <div>
          <HiDotsHorizontal className='text-whiteText' />
        </div>
      </div>
      {allTaskList.map((task, index) => (
        <div
          className='flex flex-col bg-taskCardBg rounded-lg m-1 p-2'
          task={task}
          key={task.id}
          draggable={true}
          onDragStart={() => {
            ref.current.dragPerson = task.id;
            ref.current.dragListName = taskListName;
          }}
          onDragEnter={() => {
            ref.current.draggedOverPerson = task.id;
            ref.current.draggedOverListName = taskListName;
          }}
          onDragEnd={() => {
            handleSort();
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className='ml-1 text-sm text-taskCardText mb-1'>{task.task}</h1>
          {
            task.dueDate ? <div className={`text-xs p-1 w-16 justify-center items-center rounded-sm mb-1 ml-1 flex ${ dueDateCalc(task.dueDate)}`}>
            <BsClock className='mr-1' />
            {task.dueDate}
          </div> : <div></div>
          }
  
        </div>
      ))}


{/* Start */}

        <div
          className='flex flex-col bg-taskCardBg rounded-lg m-1'
        >
          <input 
          className={`${addingNewTask ? 'block p-2 pb-8' : 'hidden'} bg-taskCardBg outline-none text-taskCardText`}
           placeholder='Enter a title for this card...'
           value={inputText}
           onChange={event => setInputText(event.target.value)} 
           onKeyDown={event => {
            if (event.key === 'Enter') {
              AddCard({ 'list': taskListName, 'task' : inputText})
              setAddingNewTask(false);
            }
          }}
           />
        </div>

{/* End */}

      <div className='bg-cyan-500 flex items-center hover:bg-red-500 mx-1 rounded-md text-whiteText hover:bg-backgroundNeutralHovered'  onClick={() =>  {setInputText('');setAddingNewTask(true)}} >
        <FaPlus className='rounded-sm mx-2 text-taskCardText text-sm' />
        <h2 className='text-sm text-taskCardText p-2'>Add a card</h2>
      </div>
      <div className='h-2'></div>
    </div>
  );
});

export default TaskList;
