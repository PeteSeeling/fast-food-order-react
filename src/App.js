
import './App.css';

import react from 'react';
import { useState } from 'react';

import AddName from './order-name';
import FoodDropDown from './FoodDropdown';
import DrinkDropDown from './DrinkDropdown';
import InstructionForm from './InstructionForm';

function App() {

  const [orderName, addOrderName] = useState('Add Your Name Here');
  const [instructions, addInstructions] = useState(['Add Your Special Requests...']);
  const [drinkId, setDrinkId] = useState(1);
  const [foodId, setFoodId] = useState(1);



  return (
    <div className="App">
      <div>
        <h2>Food Order for...{orderName}</h2>

        <ul className='instructions'>
          {
            instructions.map((instruction, i) => <li key={`${instruction}-${i}`}>
              {instruction}
            </li>)
          }
        </ul>

      </div>
      <div className='order-form'>
        <AddName addOrderName={addOrderName} />
        <InstructionForm addInstructions={addInstructions} instructions={instructions}/>
        <FoodDropDown setFoodId={setFoodId} />
        <DrinkDropDown setDrinkId={setDrinkId} />
        
        

      </div>
    </div>
  );
}

export default App;
