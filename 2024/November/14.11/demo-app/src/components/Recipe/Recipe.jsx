import React from "react";
import "./Recipe.css";

import "../Ingredients/Ingredients.jsx";
import "../Instructions/Instructions.jsx";
import "../Nutritions/Nut.jsx";
import Ingredients from "../Ingredients/Ingredients.jsx";
import Instructions from "../Instructions/Instructions.jsx";
import Nutritions from "../Nutritions/Nut.jsx";

const Recipe = () => {
    return (
    <div className="recipe">
        Hello to the Recipe!
        <Ingredients/>
        <Instructions/>
        <Nutritions/>
    </div>
    )
}

export default Recipe;