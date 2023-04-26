import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./index.css";

function App() {
  const [book, setBook] = useState([]);
  const handleBook = (title) => {
    setBook([...book, { id: Math.round(Math.random() * 9999), title }]);
  };

  function deleteHandler(id) {
    const updatedArray = book.filter((eachBook) => {
      return eachBook.id !== id;
    });
    setBook(updatedArray);
  }

  function editBookById(id, newTitle){
    const updatedBooks = book.map((book)=>{
      if(book.id === id){
        return {...book,title:newTitle};
      }
      return book;
    })
    setBook(updatedBooks);
  }
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList bookArray={book} deleteBook={deleteHandler} editBook={editBookById}/>
      <BookCreate addBook={handleBook} />
    </div>
  );
}

export default App;
