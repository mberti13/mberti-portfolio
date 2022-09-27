import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faHtml5, faCss3Alt, faReact, faJsSquare, faGitAlt} from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <div className="about-page">
      <div className="about-text">
        <h1 className="about-heading">About Me:</h1>
        <p>
          I am a Fullstack Web Developer with a B.B.A. in Marketing from Texas
          Tech University, with experience in Sales, Marketing, and Management.
          </p>
          <p>
          I am looking to develop projects, on both the front and back-end for
          various utilities. Including, but not limited to: UI/UX Design,
          Blockchain Development and Software Development.
          </p>
          <p> I am 22 years old
          currently living in St. Louis, MO, with previous experience in the
          Business/Marketing/Management Industries, as well as MERN Stack Development. My overall goal is to build
          apps, websites and programs that can truly make a difference. Scroll
          down for some of my recent projects and my contact info!
        </p>
        <button className="cta portfolio">VIEW MY WORK</button>
      </div>
    <div className="stage-cube-cont">
        <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faNode} color="#DD0031"/>
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faCss3Alt} color="#28A4d9"/>
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
            </div>
        </div>
    </div>
    </div>
  );
};

export default About;
