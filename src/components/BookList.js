import BookShow from "./BookShow";
import useBooksContext from '../hooks/use-books-context';


function BookList() {
  const {book} = useBooksContext();
  const bookNames = book.map((eachBook) => (
    <BookShow book={eachBook} key={eachBook.id} />
  ));

  return (
    <div className="book-list">
      {bookNames}
    </div>
  );
}

export default BookList;
