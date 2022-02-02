import React from 'react';

export default function FoodDropDown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return (
    <div>
            What to Eat?
      <select onChange={handleChange}>
        <option value="1">Burger</option>
        <option value="2">Tacos</option>
        <option value="3">Salad</option>
      </select>
    </div>
  );
}