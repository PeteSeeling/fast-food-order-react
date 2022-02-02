import { useState } from 'react';

export default function InstructionForm({ addInstructions, instructions }) {
  const [instructionInput, addInstructionInput] = useState('');


  function handleSubmit(e) {
    e.preventDefault();

    addInstructions([...instructions, instructionInput]);
    addInstructionInput('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
          Add Instruction...
        <input onChange={({ target }) => addInstructionInput(target.value) }/>
   
        <button> Add Your Request</button>
      </form>;
    </section>
  );
}