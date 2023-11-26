import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiUserSharedLine } from "react-icons/ri";

const SecondaryNavbar = () => {
  return (
    <div className='bg-secondaryNavColor h-14 flex justify-between items-center'>
      <div>

      <ul className='flex gap-2 justify-center items-center '>
        <li className='font-bold text-xl ml-2'>MAC</li>
        <li className='flex items-center'><FaStar style={{color: 'black'}}  className='mr-2' /> </li>
      </ul>
      </div>
      <div className='flex justify-center items-center bg-secondaryNavButton mr-2 rounded-sm text-whiteText p-2'>
        <RiUserSharedLine />
      Share
      </div>
    </div>
  )
}

export default SecondaryNavbar