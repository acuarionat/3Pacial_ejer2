import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <ul>
    <NavLink to='/'>
        <li>Home</li>
        </NavLink>
        <NavLink to='/about'>
        <li>About</li>
        </NavLink>
        <NavLink to='/dashboard'>
        <li>Dashboard</li>
        </NavLink>
        </ul>
    </div>
  )
}

export default Header