import React, { useEffect, useState } from "react";
import Meals from "./components/Meals";
import Button from "./components/Button";
import "./App.css";


function App() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMeals = async (letter) => {
        setLoading(true); 
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
            );
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMeals("a");
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }


    return (
      <div className="App">
        <Button fetchMeals={fetchMeals} />
        <Meals meals={meals} />
      </div>
    );
}

export default App;
