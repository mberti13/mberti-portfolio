import React from 'react'
import { Link } from 'react-router-dom';
import crescendoImg from '../assets/images/Crescendo.jpg';;

export default function ProjectItem() {
  return (
    <div>
        <Link to="/projects" className='projectItem__img'>
            <img src={crescendoImg} alt="crescendo image" />
        </Link>
        <div className="project-title-container">
            <Link to='#'>
                <h3 className="project-title">Crescendo</h3>
            </Link>
        </div>
    </div>
  )
}
