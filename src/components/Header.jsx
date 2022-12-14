import React from "react";

import Headshot from "../assets/images/linkedin.jpg";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <main>
        <div>
          <h1>Hey there 👋,</h1>
          <h1>I'm Matthew</h1>
          <h1>Full-Stack Developer</h1>
          <p>Specializing in Backend and API Development. I work with: Javascript, HTML, CSS, GraphQL, REST APIs and Databases. </p>
        </div>
        <div className="buttons">
            <Link to={"/contact"}><button className="cta hire">HIRE ME</button></Link>
            <Link to={"/projects"}><button className="cta portfolio">VIEW MY WORK</button></Link>
        </div>
      </main>
      <figure>
        <img src={Headshot} alt="Matthew Berti" className="headshot-img" width={350}/>
        <div className="img-bg"></div>
      </figure>
      {/* <div className="container-border">
                <div className="lines">
                    <div className="circle"></div>
                </div>
            </div> */}
    </div>
  );
};

export default Header;
