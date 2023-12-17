import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BoardPage from './pages/BoardPage'
import SignIn from './pages/SignIn'
import axios from 'axios';


function App() {
  const [user, setUser] = useState(null);
  const [board, setBoard] = useState(
    {
      name: '',
      boardId: '',
      boardImageURL: ''
    }
  )
  const[boards, setBoards] = useState([])


  useEffect(()=>{
    console.log("ASF", user)
    const fetchBoard = async() => {
      const response = await axios.get('http://localhost:5000/board/api/getBoards',{
        withCredentials:true
      });
      setBoards(response.data.boards);
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
    <BoardPage user={user} board={board} setBoard={setBoard} boards={boards} setBoards={setBoards}></BoardPage>:
    <SignIn></SignIn>}
    </div>
  )
}

export default App
