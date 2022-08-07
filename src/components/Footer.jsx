import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// TODO: import icons and logos for footer

const Footer = () => {
  return (
    <footer>
        <div className="footer-icons">
            <a className="icon fa-2x" href="https://www.linkedin.com/in/matthew-berti/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a className="icon fa-2x" href="https://github.com/mberti13" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
    </footer>
  )
}

export default Footer