
import './App.css';

import react from 'react';
import { useState } from 'react';

import AddName from './order-name';
import InstructionForm from './InstructionForm';

function App() {

  const [orderName, addOrderName] = useState('Add Your Name Here');
  const [instructions, addInstructions] = useState('Add Your Special Requests');



  return (
    <div className="App">
      <div>
        <h2>Food Order for...{orderName}</h2>
      </div>
      <div className='order-form'>
        <AddName addOrderName={addOrderName} />
        <InstructionForm addInstructions={addInstructions} instructions={instructions}/>

      </div>
    </div>
  );
}

export default App;
