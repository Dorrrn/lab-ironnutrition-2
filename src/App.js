import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsList);
  const [filteredFoods, setFilteredFoods] = useState('');

  const handleSubmit = (event, newFood) => {
    event.preventDefault();
    const updateFood = [newFood, ...foods];
    setFoods(updateFood);
  };

  const handleSearchInput = (event) => {
    setFilteredFoods(event.target.value);
  };

  return (
    <>
      <div className="App">
        <h1>Foods List</h1>
        <hr />
        <div className="AddFood">
          <h2>Add food</h2>
          <AddFoodForm handleSubmit={handleSubmit} />
        </div>
        <hr />
        <div className="Searchbar">
          <h2>Search food</h2>
          <input
            value={filteredFoods}
            placeholder="Search food"
            type="text"
            onChange={handleSearchInput}
          />
        </div>

        <div className="FoodsList">
          {foods.length === 0 ? (
            <h1>Oops! There is no more content to show</h1>
          ) : (
            foods
              .filter((food) => {
                const lowerFilter = filteredFoods.toLocaleLowerCase();
                return food.name.toLocaleLowerCase().includes(lowerFilter);
              })
              .map((food, index) => {
                return (
                  <div key={index}>
                    <FoodBox
                      name={food.name}
                      calories={food.calories}
                      image={food.image}
                    />
                  </div>
                );
              })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
