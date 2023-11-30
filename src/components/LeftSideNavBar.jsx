import React from 'react'

const LeftSideNavBar = ({toggleSideNav}) => {
  return (
    <div>
      <div onClick={()=>{toggleSideNav()}}>Close</div>
    </div>
  )
}

export default LeftSideNavBar