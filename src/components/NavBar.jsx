import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full bg-red-500 h-12 flex justify-between items-center p-2'>
        <div >

            <ul className='flex gap-8'>
                <li>Trello</li>
                <li>Recent</li>
                <li>Starred</li>
                <li>Create</li>

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