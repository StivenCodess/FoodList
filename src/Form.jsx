function Form({ setShow }) {
  function handleChange(e) {
    setShow(e.target.value);
  }

  return (
    <>
      <form>
        <input
          name="radio"
          type="radio"
          value="all"
          onChange={handleChange}
          defaultChecked
        />
        All
        <input name="radio" type="radio" value="fruits" onChange={handleChange} />
        Fruits
        <input name="radio" type="radio" value="vegetables" onChange={handleChange} />
        Vegetables
        <input name="radio" type="radio" value="favorites" onChange={handleChange} />
        Favorites
      </form>
    </>
  );
}

export default Form;
