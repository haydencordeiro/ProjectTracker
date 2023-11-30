import React, {useState} from 'react'
import LeftSideNavBar from '../components/LeftSideNavBar'
import NavBar from '../components/Navbar'
import SecondaryNavbar from '../components/SecondaryNavbar'
import BoardMainComponent from '../components/BoardMainComponent'
import { FaCircleChevronRight } from "react-icons/fa6";

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
                        <div className='fixed h-full w-1 bg-menuButtonColor'>
                            <FaCircleChevronRight size={20} className='relative top-5' onClick={() => toggleSideNav()} />

                        </div>
                    }
   
                    <BoardMainComponent />
                </div>
            </div>
        </div>
    )
}

export default BoardPage