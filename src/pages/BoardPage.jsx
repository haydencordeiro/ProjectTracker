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
            <div className='flex flex-1 '>
                <div className='w-60 bg-orange-300'>
                    <LeftSideNavBar />
                </div>
                <div className='bg-violet-400 flex-auto'>
                    <SecondaryNavbar />
                    <BoardMainComponent />
                </div>
            </div>
        </div>
    )
}

export default BoardPage