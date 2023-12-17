import React from 'react'

function SignIn() {
    const googleLogin =()=>{
        window.open("http://localhost:5000/auth/google","_self")
    }
  return (
    <div   className = " text-secondaryNavButton" onClick={()=> googleLogin()}>SignIn</div>
  )
}

export default SignIn