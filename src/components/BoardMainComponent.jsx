import React, { useRef, useState, useEffect } from 'react'
import TaskList from './TaskList'
import SecondaryNavbar from './SecondaryNavbar'
import AddTaskList from './AddTaskList'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {
  updateTasks
} from "../state/tasksSlice";


const BoardMainComponent = ({}) => {
  const allTaskList = useSelector((state) => state.tasks.value);
  const board = useSelector((state) => state.board.value);
  const dispatch = useDispatch();

    const [taskList, setTaskList] = useState(
      []
      )

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/board/api/getTasks/${board.boardId}`, {
          withCredentials: true,
        });
        dispatch(updateTasks(response.data.board.tasks));
        setTaskList(response.data.board.boardList)
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTasks();
  }, [board]); 


  const dragRef = useRef({
    dragTask: 0,
    draggeOverTask: 0,
    dragListName: "",
    draggedOverListName: "",
  });




  const AddNewTaskList = async(newTaskListName) => {
    let temp = [...taskList]
    temp.push(newTaskListName)
    setTaskList(temp)

  }


  const swapListBackendApiHelper = async(first, second) => {
    const response = await axios.get(`http://localhost:5000/board/api/swaplist/${board.boardId}/${first}/${second}`, {
      withCredentials: true,
    });
  }

  const moveTaskApiHelper = async(first, second, newList) => {
    const response = await axios.get(`http://localhost:5000/board/api/movetask/${board.boardId}/${first}/${second}/${newList}`, {
      withCredentials: true,
    });
  }

  function handleSort(isEntireList = false) {
    const allTaskListClone = isEntireList ? [...taskList] : [...allTaskList];
    let firstObjectIndex;
    let secondObjectIndex
    if (isEntireList) {
      // dragTitleListName -> Todo List Name Picked up
      // draggedOverTitleListName -> ToDo List Name to Swap with
      // one endpoint that will swap board.boardList based on 2 index
      firstObjectIndex = allTaskListClone.findIndex(obj => obj === dragRef.current.dragTitleListName);
      secondObjectIndex = allTaskListClone.findIndex(obj => obj === dragRef.current.draggedOverTitleListName);
      swapListBackendApiHelper(firstObjectIndex, secondObjectIndex)
    }
    else {
        // one endpoint that will swap board.tasks based on 2 index but also need to update the first index list
        

      firstObjectIndex = allTaskListClone.findIndex(obj => obj.id === dragRef.current.dragTask);
      secondObjectIndex = allTaskListClone.findIndex(obj => obj.id === dragRef.current.draggeOverTask);
    }

    // swapping logic
    let temp = allTaskListClone[firstObjectIndex];
    if (!isEntireList) {
      // change the list for dragged task
      temp.list = dragRef.current.draggedOverListName
      moveTaskApiHelper(firstObjectIndex,secondObjectIndex, dragRef.current.draggedOverListName)
    }
    allTaskListClone[firstObjectIndex] = allTaskListClone[secondObjectIndex]
    allTaskListClone[secondObjectIndex] = temp;

    // updating the appropriate list
    isEntireList ? setTaskList(allTaskListClone) : dispatch(updateTasks(allTaskListClone));
  }


  async function AddCard(taskData) {
    const temp = [...allTaskList]
    taskData['id'] = "9a2ff95a-98f2-4da0-918d-6f1f43e3b61dd" + taskData.task
    temp.push(
      taskData
    )
    const response = await axios.get(`http://localhost:5000/board/api/addTask/${board.boardId}/${taskData.task}/${taskData.list}`, {
      withCredentials: true,
    });
    dispatch(updateTasks(temp))

  }
  return (
    <div    style={{'--image-url': `url(${board.boardImageURL})`}} 
    className={'h-screen bg-fit bg-center bg-[image:var(--image-url)]'}>
      <SecondaryNavbar/>

      <div className='flex overflow-auto'>
        {taskList.map((task, index) =>
          <TaskList taskListName={task} key={index} ref={dragRef} handleSort={handleSort}
            AddCard={AddCard}
          ></TaskList>
        )}
        <AddTaskList
          AddNewTaskList={AddNewTaskList}
        ></AddTaskList>


      </div>
    </div>
  )
}

export default BoardMainComponent