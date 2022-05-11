import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsList);
  const [filteredFoods, setFilteredFoods] = useState('');
  const [todaysFoods, setTodaysFoods] = useState([]);

  const handleSubmit = (event, newFood) => {
    event.preventDefault();
    setFoods((prevFood) => [newFood, ...prevFood]);
  };

  const handleSearchInput = (event) => {
    setFilteredFoods(event.target.value);
  };

  const handleAddFood = (addedFood) => {
    setTodaysFoods((prevTodaysFood) => [addedFood, ...prevTodaysFood]);
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
        <div className="columns">
          <div className="column">
            <div className="FoodsList">
              {foods.length === 0 ? (
                <h1>Oops! There is no more content to show</h1>
              ) : (
                foods
                  .filter((food) => {
                    const lowerFilter = filteredFoods.toLowerCase();
                    return food.name.toLowerCase().includes(lowerFilter);
                  })
                  .map((food, index) => {
                    return (
                      <div key={index}>
                        <FoodBox food={food} onAddFood={handleAddFood} />
                      </div>
                    );
                  })
              )}
            </div>
          </div>

          <div className="column">
            <h1>Today's food</h1>
            {todaysFoods.map((todaysFood, index) => {
              return (
                <p>
                  {todaysFood.amount} x {todaysFood.food.name}(
                  {todaysFood.food.calories} cal)
                </p>
              );
            })}
            <p>
              Total:{' '}
              {todaysFoods.reduce((acc, curr) => {
                return acc + curr.food.calories * curr.amount;
              }, 0)}{' '}
              calories
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
