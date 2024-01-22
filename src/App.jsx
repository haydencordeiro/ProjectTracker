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


function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [board, setBoard] = useState(
    {
      name: '',
      boardId: '',
      boardImageURL: ''
    }
  )

  useEffect(()=>{
    console.log("ASF", user)
    const fetchBoard = async() => {
      const response = await axios.get('http://localhost:5000/board/api/getBoards',{
        withCredentials:true
      });
      dispatch(updateBoards(response.data.boards))
      const lastBoard = response.data.boards.at(-1);
      if(lastBoard){
        setBoard(
          {
            name: lastBoard.name,
            boardId: lastBoard.id,
            boardImageURL: lastBoard.boardImageURL
          }
        )
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
          setUser(resObject.user)
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
    <BoardPage user={user} board={board} setBoard={setBoard}></BoardPage>:
    <SignIn></SignIn>}
    </div>
  )
}

export default App
