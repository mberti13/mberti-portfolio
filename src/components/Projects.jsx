import React from 'react'
import {SliderData} from './SliderData';

function Projects() {
  return (
   <>
    {SliderData.map((slide, index) =>{
      return(
        <img src={slide.image} alt={slide.alt} /> 
      )
    })}
   </>
  )
}

export default Projects