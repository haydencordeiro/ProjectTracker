import React from 'react'
import LeftSideNavBar from '../components/LeftSideNavBar'
import NavBar from '../components/Navbar'
import SecondaryNavbar from '../components/SecondaryNavbar'
import BoardMainComponent from '../components/BoardMainComponent'

const BoardPage = () => {
    return (
        <div className='min-h-full min-w-full flex flex-col bg-cyan-800'>
            <div>
                <NavBar />
            </div>
            <div className='flex flex-1  '>
                <div className='w-1/5 bg-leftSideNavBG text-leftSideNavText'>
                    <LeftSideNavBar />
                </div>
                <div className='flex-none w-4/5'>
                    {/* <SecondaryNavbar /> */}
                    <BoardMainComponent />
                </div>
            </div>
        </div>
    )
}

export default BoardPage