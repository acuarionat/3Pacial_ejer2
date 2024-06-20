import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <ul>
    <NavLink>
        <li>Home</li>
        </NavLink>
        <NavLink>
        <li>About</li>
        </NavLink>
        <NavLink>
        <li>Dashboard</li>
        </NavLink>
        </ul>
    </div>
  )
}

export default Header