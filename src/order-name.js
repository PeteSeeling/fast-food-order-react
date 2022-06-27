
export default function AddName({ addOrderName }) {
  function handleChange(e) {
    addOrderName(e.target.value);
  }

  return <div className='add-name-input'>
      Your Name:
    <input onChange={handleChange} />
  </div>;
}