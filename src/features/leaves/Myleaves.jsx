import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Myleaves() {
  return (
    <div className='border border-2 border-secondary m-2 p-2'>
        <h1>Myleaves</h1>
        <div>
            <Link to="/myleaves/allleaves">All Leaves</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/myleaves/applyleave">Apply Leave</Link>&nbsp;&nbsp;&nbsp;
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Myleaves