import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header-comp'>
      <div>
        <NavLink to='/dashboard' className="navlink">Control Board</NavLink>
        <NavLink to='/statistics' className="navlink">Data analysis</NavLink>
        <NavLink to='/charts' className="navlink">Charts  Graph</NavLink>
      </div>
    </div>
  )
}

export default Header