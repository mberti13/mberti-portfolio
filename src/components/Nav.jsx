import React from 'react'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='sticky-nav'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"about"}>About Me</Link></li>
            <li className='resume-link'><a href="https://docs.google.com/document/d/1x1TdlubHrWFR0pQXBxFbFX2pLXvMj8u7pe4RPQKmK1s/edit?usp=sharing" target="_blank" rel="noreferrer noopener">Resume</a></li>
            <li>Projects</li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Nav