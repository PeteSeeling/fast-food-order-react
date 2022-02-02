import React from 'react';

export default function DrinkDropDown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  return (
    <div>
            What to Drink?
      <select onChange={handleChange}>
        <option value="1">Coffee</option>
        <option value="2">Water</option>
        <option value="3">Kambucha</option>
      </select>
    </div>
  );
}