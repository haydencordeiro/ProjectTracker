import React from 'react'
import { FaWindowRestore  } from "react-icons/fa";
import { FaArrowDown  } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='w-full bg-red-500 h-12 flex justify-between items-center p-2'>
        <div >

            <ul className='flex gap-8'>
                <li className='flex justify-evenly items-center'>  <FaWindowRestore style={{color: 'black'}}  className='mr-2' />  Trello</li>
                <li className='flex items-center p-2 rounded-sm hover:bg-blue-200'>Recent  <FaArrowDown style={{color: 'black'}}  className='ml-2' /> </li>
                <li className='flex items-center p-2 rounded-sm hover:bg-blue-200'>Starred <FaArrowDown style={{color: 'black'}}  className='ml-2' /> </li>
                <li className='flex items-center p-2 rounded-md bg-blue-500 hover:bg-blue-400 ring-2 ring-blue-500'>Create</li>

            </ul>
        </div>
        <div>
            <ul className='flex gap-8'>
                <li>Search Bar</li>
                <li>Notifiations</li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar