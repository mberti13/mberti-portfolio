import React from 'react'

const Nav = () => {
  return (
    <nav className='sticky-nav'>
        <ul>
            <li className='nav-container'>About Me</li>
            <li className='resume-nav nav-list-item'
            href='/'
            
            >Resume</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav