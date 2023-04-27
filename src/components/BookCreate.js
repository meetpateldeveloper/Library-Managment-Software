import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {

  const [state, setState] = useState("");
  const {createBook}=useBooksContext();
  const onInputChange = (event) => {
    setState(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createBook(state);
    setState("");
  };

  return (
    <div className="book-create">
        <h3>Add a Book</h3>
      <form onSubmit={onSubmit}>
        <input className="input" value={state} onChange={onInputChange} />
        <button type="submit" className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
