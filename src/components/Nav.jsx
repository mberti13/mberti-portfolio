import React from 'react'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='sticky-nav'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"about"}>About Me</Link></li>
            <li className='resume-link'>Resume</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav