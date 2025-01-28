import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../user/userSlice';
function Navbar() {
    var {userDetails}=useSelector(state=>state.user);
    console.log(userDetails)
    const dispatch = useDispatch()
    var navigate = useNavigate()
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        {
                            userDetails && userDetails.role==='admin' && (
                                <>
                                    <li class="nav-item">
                                        <Link className='nav-link' to="/leaves">Leaves</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            userDetails && userDetails.role==='employee' && (
                                <>
                                    <li class="nav-item">
                                        <Link className='nav-link' to="/myleaves">MyLeaves</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                                userDetails && <button onClick={()=>{
                                    dispatch(logout());
                                    navigate("/login")
                                }}>Logout</button>
                        }
                        {
                                !userDetails && (
                                    <>
                                        <li class="nav-item">
                                            <Link className='nav-link' to="/register">Register</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className='nav-link' to="/login">Login</Link>
                                        </li>
                                    </>
                                )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar