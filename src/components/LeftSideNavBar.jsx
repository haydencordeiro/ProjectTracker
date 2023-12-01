import React from 'react'
import { FaChevronLeft } from "react-icons/fa";

const LeftSideNavBar = ({toggleSideNav}) => {
  return (
    <div className=' h-14 border border-l-0 border-[hsla(211,18%,68%,0.16)] flex justify-start items-center'>
      <div className='flex flex-grow flex-row items-center  bg-leftSideNavBG'>
        <h1 className='flex font-bold  rounded-md items-center justify-center text-center ml-1 mr-3 h-10 w-10 bg-[#B5538F] text-[#1D2125] '>
          H
        </h1>
        <div className='  flex-1'>
          <h1 className=' text-base'>Hayden's Team</h1>
          <h3 className='text-sm'>Free</h3>
        </div>
        <div className='h-8 w-8 flex justify-center items-center bg-[#282728] rounded-md cursor-pointer' onClick={()=>toggleSideNav()}>
          <FaChevronLeft className=' text-[#6B778C]'  size={16} />
        </div>
      </div>
      {/* <div onClick={()=>{toggleSideNav()}}>Close</div> */}
    </div>
  )
}

export default LeftSideNavBar