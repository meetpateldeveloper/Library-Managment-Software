import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById} = useBooksContext();

  const deleteClickHandler = () => {
    deleteBookById(book.id);
  };

  const editClickHandler = () => {
    setShowEdit(!showEdit);
  };

  

  let content = <h3>{book.title}</h3>
  if(showEdit){content=<BookEdit book={book} onEditClickHandler={editClickHandler}/>}

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={editClickHandler}>
          Edit
        </button>
        <button className="delete" onClick={deleteClickHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
