import React from "react";

const Button = ({ fetchMeals }) => {
    return (
        <div>
            <button onClick={() => fetchMeals("a")}>A</button>
            <button onClick={() => fetchMeals("b")}>B</button>
            <button onClick={() => fetchMeals("c")}>C</button>
        </div>
    );
};

export default Button;
