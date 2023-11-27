import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BsClock } from 'react-icons/bs';

const TaskList = forwardRef(({ tasks, taskListName }, ref) => {
  const [allTaskList, setAllTaskList] = useState([]);

  function handleSort() {
    console.log(ref.current)
    const allTaskListClone = [...allTaskList];
    const temp = allTaskListClone[ref.current.dragPerson];
    allTaskListClone[ref.current.dragPerson] = allTaskListClone[ref.current.draggedOverPerson];
    allTaskListClone[ref.current.draggedOverPerson] = temp;
    setAllTaskList(allTaskListClone);
  }

  useEffect(() => {
    setAllTaskList(tasks.filter((task) => task.list === taskListName));
  }, [tasks, taskListName]);

  return (
    <div className='rounded-lg bg-taskListBg flex-- w-64 m-2 flex-shrink'>
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
          key={index}
          draggable={true}
          onDragStart={() => {
            ref.current.dragPerson = index;
            ref.current.dragListName = taskListName;
          }}
          onDragEnter={() => {
            ref.current.draggedOverPerson = index;
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
          <div className='text-xs p-1 bg-overdueRed w-16 justify-center items-center rounded-sm mb-1 ml-1 text-overdueRedText flex'>
            <BsClock className='mr-1' />
            {task.dueDate}
          </div>
        </div>
      ))}
      <div className='bg-cyan-500 flex items-center hover:bg-red-500 mx-1 rounded-md text-whiteText'>
        <FaPlus className='rounded-sm mx-2 text-whiteText' />
        <h2>Click to add card</h2>
      </div>
      <div className='h-2'></div>
    </div>
  );
});

export default TaskList;
