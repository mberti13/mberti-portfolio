import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// TODO: import icons and logos for footer

const Footer = () => {
  return (
    <footer>
        <div className="footer-icons">
            <a className="icon fa-2x"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a className="icon fa-2x"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>
    </footer>
  )
}

export default Footer