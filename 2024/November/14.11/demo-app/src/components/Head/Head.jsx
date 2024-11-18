import React from "react";  
import "../Maincontainer/MainContainer.jsx";
import './Head.css'

import Intro from "../Intro/Intro.jsx"
import PrepTime from "../PrepTime/Prep.jsx"

const Head = () => {
    return (
    <div className="head">
         Simple Omelette Recipe
        <Intro/>
        <PrepTime/>
        </div>
    )
}

export default Head;