import React from 'react'
// import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import { Outlet } from 'react-router'

function PortalLayout() {
  return (
     <div id="wrapper">
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar />
      <Outlet/> 
    </div>
  </div>
</div>

  )
}

export default PortalLayout