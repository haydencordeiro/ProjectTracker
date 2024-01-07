import React,{useState, useEffect} from 'react'
import { FaWindowRestore  } from "react-icons/fa";
import { FaArrowDown  } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoApps } from "react-icons/io5";
import { TbBellRinging2 } from "react-icons/tb";
import { GrFormSearch } from "react-icons/gr";
import axios from 'axios';

const NavBar = ({user, board, setBoard, boards, setBoards}) => {
    const Logout = () => {
        fetch("http://localhost:5000/auth/logout", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        location.reload()
      };

const createBoard = async () => {
  let boardName = prompt("Enter a name for your board", "");
  if (boardName == null || boardName == "") {
    return
  }
  const response = await axios.get(`http://localhost:5000/board/api/createBoard/${boardName}`, {
    withCredentials: true,
  });
  boards.push({
    name:response.data.board.name,
    id:response.data.board.id,
    boardImageURL: response.data.board.boardImageURL
  })
  setBoard({
    name: response.data.board.name,
    boardId: response.data.board.id,
    boardImageURL: response.data.board.boardImageURL
  })
}
  return (
    <div className='w-full bg-navbarBackground h-12 flex justify-between items-center p-2'>
        <div >

            <ul className='flex gap-8'>
                <li className='flex justify-evenly items-center text-navbarTextColor text-lg font-bold'>  <IoApps className='mr-2 text-navbarTextColor' />  Trello</li>
                <li className='flex items-center p-2 rounded-sm text-navbarTextColor text-sm font-medium hover:bg-blue-200'>Recent  <SlArrowDown className=' text-xs text-navbarTextColor ml-2' /> </li>
                <li className='flex items-center p-2 rounded-sm text-navbarTextColor text-sm font-medium hover:bg-blue-200'>Starred <SlArrowDown className=' text-xs text-navbarTextColor ml-2' /> </li>
                <li className='flex items-center text-navbarBackground rounded-sm px-3 py-1 my-1 bg-menuButtonColor text-sm font-medium' onClick={() => createBoard()}>Create</li>

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
                <li className='text-navbarTextColor'><div className='text-whiteText bg-green p-1 w-8 h-8 rounded-full font-medium justify-center text-center items-center' onClick={() => Logout()} >
                {user.displayName.split(' ')[0][0] + user.displayName.split(' ')[1][0]}
</div></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar