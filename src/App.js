import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsList);

  const handleSubmit = (event, newFood) => {
    event.preventDefault();
    const updateFood = [newFood, ...foods];
    setFoods(updateFood);
  };

  return (
    <>
      <div className="App">
        <div className="AddFood">
          <AddFoodForm handleSubmit={handleSubmit} />
        </div>

        {foods.map((food) => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
