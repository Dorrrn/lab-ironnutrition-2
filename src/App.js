import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFoods] = useState(foods);

  return (
    <div className="App">
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
  );
}

export default App;
