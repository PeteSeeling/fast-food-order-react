
import './App.css';
import react from 'react';
import { useState } from 'react';

import AddName from './order-name';

function App() {

  const [orderName, addOrderName] = useState('Add Your Name Here');
  return (
    <div className="App">
      <div>
        <h2>Food Order for...{orderName}</h2>
      </div>
      <div className='order-form'>
        <AddName addOrderName={addOrderName} />

      </div>
    </div>
  );
}

export default App;
