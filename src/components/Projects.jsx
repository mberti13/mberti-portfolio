import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import ProjectItem from './ProjectItem';

//projects seed data
import projects from '../assets/data/projects';

const Projects = () => {
  return (
    <div>
        <div className="project-container">
          <h1>Projects</h1>
          <h3>Some of my recent projects:</h3>
          <div className="project-allitems">
            <Swiper
            spaceBetween={30} slidesPerView={1}
            navigation>
              {projects.map((project, index) =>{
                return(
              <SwiperSlide key={project.id}>
                <ProjectItem></ProjectItem>
              </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>

    </div>
  )
}

export default Projects