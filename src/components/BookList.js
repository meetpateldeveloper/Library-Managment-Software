import BookShow from "./BookShow";

function BookList({ bookArray, deleteBook,editBook }) {
    
  const bookNames = bookArray.map((eachBook) => (
    <BookShow book={eachBook} deleteBook={deleteBook} editBook={editBook} />
  ));

  return <div className="bookList">{bookNames}</div>;
}

export default BookList;
