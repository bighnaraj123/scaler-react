import React from 'react'
import Logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        <ul className='flex items-center gap-1'>
            <li><NavLink to='/'><img src={Logo}></img></NavLink></li>
            <li><NavLink to='/home' style={({isActive}) => {
                return {
                    textDecoration: isActive? "underline" : "none",
                }
            }}>Home</NavLink></li>
            <li><NavLink to='/WatchList' style={({isActive}) => {
                return {
                    textDecoration: isActive? "underline" : "none",
                }
            }}>Watch List</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar
