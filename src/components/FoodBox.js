import React, { useState } from 'react';

export default function FoodBox(props) {
  const [amount, setAmount] = useState(1);

  const food = props.food;

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={amount}
                onChange={(event) => {
                  handleChangeAmount(event);
                }}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => {
                  props.onAddFood({
                    food: food,
                    amount: amount,
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
