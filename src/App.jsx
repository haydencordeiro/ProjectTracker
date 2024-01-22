import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BoardPage from './pages/BoardPage'
import SignIn from './pages/SignIn'
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import {
  updateBoards
} from "./state/boardsSlice";

import {
  updateBoard
} from "./state/boardSlice";



import {
  updateUser
} from "./state/userSlice";


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  useEffect(()=>{
    const fetchBoard = async() => {
      const response = await axios.get('http://localhost:5000/board/api/getBoards',{
        withCredentials:true
      });
      dispatch(updateBoards(response.data.boards))
      const lastBoard = response.data.boards.at(-1);
      if(lastBoard){
        dispatch(updateBoard(
          {
            name: lastBoard.name,
            boardId: lastBoard.id,
            boardImageURL: lastBoard.boardImageURL
          }
        ))
      }

    }
    fetchBoard()
  },[user])

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {

          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          dispatch(updateUser(resObject.user))
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);



  return (
    <div className='h-screen w-screen overflow-y-clip overflow-x-auto'>
    { user?
    <BoardPage></BoardPage>:
    <SignIn></SignIn>}
    </div>
  )
}

export default App
