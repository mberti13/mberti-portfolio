import React from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Nav from './components/Nav';
import Header from "./components/Header";
import About from "./components/About";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Modal from './components/modal'
import { SliderData } from "./components/SliderData";


  
const App = () => {
    return (
        <Router>
        <div>
            <Nav />
            <Routes>
                <Route path="/mberti-portfolio" element={<Header />}></Route>
                <Route path="/mberti-portfolio/about" element={<About />}></Route>
                <Route path="/mberti-portfolio/contact" element={<Contact />}></Route>
                <Route path="/mberti-portfolio/projects" element={<Projects slides={SliderData} />}></Route>
                {/* <Route path="/modal" element={<Modal />}></Route> */}
            </Routes>
            <Footer></Footer>
        </div>
        </Router>
    )
}

export default App;