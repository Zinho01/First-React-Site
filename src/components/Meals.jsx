import React from "react";
import Dish from "./Dish";

const Meals = ({ meals }) => {
    return (
        <div>
            {meals.map((meal) => (
                <Dish key={meal.idMeal} meal={meal} />
            ))}
        </div>
    );
};

export default Meals;