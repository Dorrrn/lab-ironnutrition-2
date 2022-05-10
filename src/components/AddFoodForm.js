import React, { useState } from 'react';
import { Input, Button } from 'antd';

export default function AddFoodForm(props) {
  const [isHide, setIsHide] = useState(false);
  const [addedFood, setAddedFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleInputChange = (event) => {
    setAddedFood((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
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
        <form>
          <label>Name</label>
          <Input
            name="name"
            value={addedFood.name}
            type="text"
            onChange={handleInputChange}
          />
          <label>Image</label>
          <Input
            name="image"
            value={addedFood.image}
            type="text"
            placeholder="https://example.com/food-image.jpg"
            onChange={handleInputChange}
          />
          <label>Calories</label>
          <Input
            name="calories"
            value={addedFood.calories}
            type="number"
            onChange={handleInputChange}
          />
          <label>Servings</label>
          <Input
            name="servings"
            value={addedFood.servings}
            type="number"
            min="1"
            max="99"
            onChange={handleInputChange}
          />
          <Button onClick={submitButton} id="buttonCreate">
            Create
          </Button>
        </form>
        <Button onClick={handleHide}>Hide</Button>
      </div>

      <Button id={isHide ? 'hide' : 'show'} onClick={handleHide}>
        Show
      </Button>
    </div>
  );
}
