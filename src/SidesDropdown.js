import React from 'react';

export default function SidesDropDown({ setSidesId }) {
  function handleChange(e) {
    setSidesId(e.target.value);
  }
  return (
    <div>
            What Sides?
      <select onChange={handleChange}>
        <option value="1">Fries</option>
        <option value="2">Rice</option>
        <option value="3">Coleslaw</option>
      </select>
    </div>
  );
}