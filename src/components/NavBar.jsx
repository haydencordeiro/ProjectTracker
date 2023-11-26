import React from 'react'
import { FaWindowRestore  } from "react-icons/fa";
import { FaArrowDown  } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoApps } from "react-icons/io5";
import { TbBellRinging2 } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className='w-full bg-navbarBackground h-12 flex justify-between items-center p-2'>
        <div >

            <ul className='flex gap-8'>
                <li className='flex justify-evenly items-center text-navbarTextColor text-lg'>  <IoApps className='mr-2 text-navbarTextColor' />  Trello</li>
                <li className='flex items-center p-2 rounded-sm text-navbarTextColor text-sm hover:bg-blue-200'>Recent  <SlArrowDown className=' text-xs text-navbarTextColor ml-2' /> </li>
                <li className='flex items-center p-2 rounded-sm text-navbarTextColor text-sm hover:bg-blue-200'>Starred <SlArrowDown className=' text-xs text-navbarTextColor ml-2' /> </li>
                <li className='flex items-center text-navbarBackground rounded-md px-4 my-1 bg-menuButtonColor text-sm'>Create</li>

            </ul>
        </div>
        <div>
            <ul className='flex gap-8 mr-2'>
                <li className='text-navbarTextColor'>Search Bar</li>
                <li className='text-navbarTextColor justify-center items-center'><TbBellRinging2 className='text-navbarTextColor text-xl mt-1' /></li>
                <li className='text-navbarTextColor'><div className='text-navbarBackground bg-green p-1 w-8 h-8 rounded-full'>HC</div></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar