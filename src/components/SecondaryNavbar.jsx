import React from 'react'
import { FaRegStar  } from "react-icons/fa";

const SecondaryNavbar = () => {
  return (
    <div className='bg-cyan-400 h-14 flex justify-between items-center'>
      <div>

      <ul className='flex gap-2'>
        <li>Mac</li>
        <li className='flex items-center'><FaRegStar style={{color: 'black'}}  className='mr-2' /> </li>
      </ul>
      </div>
      <div>Share</div>
    </div>
  )
}

export default SecondaryNavbar