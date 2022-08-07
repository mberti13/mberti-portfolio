import React from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Nav from './components/Nav'
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";


  
const App = () => {
    return (
        <Router>
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="about" element={<About />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
        </Router>
    )
}

export default App;