import React from "react";

import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

import Nav from './components/Nav'
import Header from "./components/Header";
import About from "./components/About";


  
const App = () => {
    return (
        <Router>
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <div className="container-border">
                <div className="lines">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default App;