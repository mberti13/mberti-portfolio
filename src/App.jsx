import React from "react";

import Nav from './components/Nav'
import Header from "./components/Header";


  
const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <div className="container">
                <div className="lines">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}

export default App;