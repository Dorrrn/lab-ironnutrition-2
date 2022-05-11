import React, { useState } from 'react';

export default function AddFoodForm(props) {
  const [isHide, setIsHide] = useState(false);
  const [addedFood, setAddedFood] = useState({
    name: '',
    image: 'https://via.placeholder.com/30x30',
    calories: '',
    servings: '',
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setAddedFood({ ...addedFood, [event.target.name]: value });
  };

  const submitButton = (event) => {
    props.handleSubmit(event, addedFood);
  };

  const handleHide = () => {
    setIsHide(!isHide);
  };

  return (
    <div class="AddFoodForm">
      <div className={isHide ? 'show' : 'hide'}>
        <form onSubmit={submitButton}>
          <label>Name</label>
          <input
            name="name"
            value={addedFood.name}
            type="text"
            onChange={handleInputChange}
          />
          <label>Image</label>
          <input
            name="image"
            value={addedFood.image}
            type="text"
            placeholder="https://via.placeholder.com/30x30"
            onChange={handleInputChange}
          />
          <label>Calories</label>
          <input
            name="calories"
            value={addedFood.calories}
            type="number"
            onChange={handleInputChange}
          />

          <button type="submit" id="buttonCreate">
            Create
          </button>
        </form>
      </div>

      <button id={isHide ? 'hide' : 'show'} onClick={handleHide}>
        {isHide ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
