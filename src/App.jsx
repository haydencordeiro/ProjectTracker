import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BoardPage from './pages/BoardPage'
import SignIn from './pages/SignIn'
function App() {
  const [user, setUser] = useState(null);
  const [board, setBoard] = useState(
    {
      name: '',
      boardId: '553f17a4-82ec-4396-8253-6b8a54c11885',
    }
  )




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
          console.log(resObject.user)
          setUser(resObject.user);
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
