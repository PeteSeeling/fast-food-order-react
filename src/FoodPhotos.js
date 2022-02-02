import React from 'react';

export default function FoodPhotos({ foodId, drinkId, sidesId }) {
  return <div className='food-photos'>
    <img className='food-pic' src={`food-${foodId}.jpg`} />
    <img className='food-pic' src={`sides-${sidesId}.jpg`} />
    <img className='food-pic' src={`drink-${drinkId}.jpg`} />
  </div>;
}