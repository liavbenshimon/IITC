import React from "react";
import "./MainContainer.css";

// 
import Head from "../Head/Head";
import Recipe from "../Recipe/Recipe";


const MainContainer = () => {
    return (
    <div className="main-container">
        Hello to the container!
        <Head/>
        <Recipe/>
    </div>
    )
}

export default MainContainer;