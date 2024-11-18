import React from "react";
import "./MainContainer.css";
import homlet from "../../recipe-page-main/assets/images/image-omelette.jpeg"



// 
import Head from "../Head/Head";
import Recipe from "../Recipe/Recipe";


const MainContainer = () => {
    return (
        
        <div className="">
        <h1 className="h1">  Simple Omelette Recipe</h1>
        <div className="homletContainer"><img className='homlet' src={homlet} alt="homlet" />
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </div>
    <Head/>
    <Recipe/>
    </div>
    )
}

export default MainContainer;