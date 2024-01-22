import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  updateBoard
} from "../state/boardSlice";
const LeftSideNavBar = ({ toggleSideNav}) => {
  
  const user = useSelector((state) => state.user.value);
  const boards = useSelector((state) => state.boards.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className=' h-14 border border-l-0 border-[hsla(211,18%,68%,0.16)] flex justify-start items-center'>
        <div className='flex flex-grow flex-row items-center  bg-leftSideNavBG'>
          <h1 className='flex font-bold  rounded-md items-center justify-center text-center ml-1 mr-3 h-10 w-10 bg-[#B5538F] text-[#1D2125] '>
            H
          </h1>
          <div className='  flex-1'>
            <h1 className=' text-base'>{user.displayName.split(' ')[0]}'s Team</h1>
            <h3 className='text-sm'>Free</h3>
          </div>
          <div className='h-8 w-8 flex justify-center items-center bg-[#282728] rounded-md cursor-pointer' onClick={() => toggleSideNav()}>
            <FaChevronLeft className=' text-[#6B778C]' size={16} />
          </div>
        </div>

      </div>
      <div>
        {boards.map((board) =>
        
        <div className='flex p-3 h-8 items-center hover:bg-[#A1BDD914]'
        key = {board.id}
        onClick={()=>{
          dispatch(updateBoard({
            name: board.name,
            boardId: board.id,
            boardImageURL:board.boardImageURL
          }))
        }}
        
        >
        <img
          className='h-5 w-6 rounded-sm '
          src='https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1194/1ae72d8a416e9a846331da7083f0d4ba/photo-1694250990115-ca7d9d991b24.jpg' />
        <h3 className='ml-2'>{board.name}</h3>
      </div>
        )}


      </div>
    </div>
  )
}

export default LeftSideNavBar