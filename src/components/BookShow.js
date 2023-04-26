import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBook,editBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const deleteClickHandler = () => {
    deleteBook(book.id);
  };

  const editClickHandler = () => {
    setShowEdit(!showEdit);
  };

  const onEditClickHandler = (id,title) => {
    setShowEdit(!showEdit);
    editBook(id,title)
  };
  

  let content = <h3>{book.title}</h3>
  if(showEdit){content=<BookEdit book={book} onEditClickHandler={onEditClickHandler} editClickHandler={editClickHandler}/>}

  return (
    <div className="book-show" key={book.id}>
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
