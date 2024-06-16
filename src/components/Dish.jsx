import React, { useState } from 'react';

const Dish = ({ meal }) => {
    const [title, setTitle] = useState(meal.strMeal);

    const handleTitleChange = () => {
        const newTitle = prompt('Enter new title', title);
        if (newTitle) {
            setTitle(newTitle);
        }
    };

    return (
        <article>
            <h1>{title}</h1>
            <img
                src="https://www.svgrepo.com/show/42233/pencil-edit-button.svg"
                alt="Edit title"
                style={{ cursor: 'pointer', width: '20px', height: '20px' }}
                onClick={handleTitleChange}
            />
            <p>{meal.strInstructions}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
        </article>
    );
};


export default Dish;