import React, {useState} from 'react'
import LeftSideNavBar from '../components/LeftSideNavBar'
import NavBar from '../components/Navbar'
import SecondaryNavbar from '../components/SecondaryNavbar'
import BoardMainComponent from '../components/BoardMainComponent'
import { FaChevronRight } from "react-icons/fa";

const BoardPage = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    const toggleSideNav = () =>{
        setIsSideNavOpen(!isSideNavOpen)
    }
    return (
        <div className='min-h-full min-w-full flex flex-col bg-cyan-800'>
            <div>
                <NavBar />
            </div>
            <div className='flex flex-1'>
                {
                    isSideNavOpen && 
                    <div className={`${isSideNavOpen ? 'w-1/5' : 'w-0' } bg-leftSideNavBG text-leftSideNavText`}>
                    <LeftSideNavBar toggleSideNav={toggleSideNav} />
                </div>
                }

                <div className={`flex-col ${isSideNavOpen ? 'w-4/5' : 'w-full' }`}>
                    {
                        !isSideNavOpen &&  
                        <div className='fixed h-full w-1 bg-[hsla(206,13.7%,10%,0.9)]'>
                            <div className='flex relative top-4 left-0 -translate-x-1 rounded-xl justify-center items-center text-center text-whiteText bg-leftSideNavBG h-6 w-6' onClick={() => toggleSideNav()} >
                            <FaChevronRight size ={12} />

                            </div>

                        </div>
                    }
   
                    <BoardMainComponent />
                </div>
            </div>
        </div>
    )
}

export default BoardPage