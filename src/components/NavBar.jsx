import React from 'react'
import { FaWindowRestore  } from "react-icons/fa";
import { FaArrowDown  } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoApps } from "react-icons/io5";
import { TbBellRinging2 } from "react-icons/tb";
import { GrFormSearch } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className='w-full bg-navbarBackground h-12 flex justify-between items-center p-2'>
        <div >

            <ul className='flex gap-8'>
                <li className='flex justify-evenly items-center text-navbarTextColor text-lg font-bold'>  <IoApps className='mr-2 text-navbarTextColor' />  Trello</li>
                <li className='flex items-center p-2 rounded-sm text-navbarTextColor text-sm font-medium hover:bg-blue-200'>Recent  <SlArrowDown className=' text-xs text-navbarTextColor ml-2' /> </li>
                <li className='flex items-center p-2 rounded-sm text-navbarTextColor text-sm font-medium hover:bg-blue-200'>Starred <SlArrowDown className=' text-xs text-navbarTextColor ml-2' /> </li>
                <li className='flex items-center text-navbarBackground rounded-sm px-3 py-1 my-1 bg-menuButtonColor text-sm font-medium'>Create</li>

            </ul>
        </div>
        <div>
            <ul className='flex gap-8 mr-2'>
                <li className='text-navbarTextColor'>

                <div className='justify-center items-center flex border border-#a6c5e229 rounded-md'>
                    <span><GrFormSearch className='text-#8C9BAB text-xl ml-2' /></span>
            <input type="text" id="first_name" className=" font-medium	h-8 bg-searchFieldBG text-#8C9BAB text-md rounded-md block w-full p-2.5 pl-1" placeholder="Search" />
        </div>
                </li>
                <li className='text-navbarTextColor justify-center items-center'><TbBellRinging2 className='text-navbarTextColor text-xl mt-1' /></li>
                <li className='text-navbarTextColor'><div className='text-whiteText bg-green p-1 w-8 h-8 rounded-full font-medium'>HC</div></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar