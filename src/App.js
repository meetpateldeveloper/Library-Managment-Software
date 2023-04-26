import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./index.css";
import axios from "axios";

function App() {

  // State of Books Array
  const [book, setBook] = useState([]);

   // Fatches all the Books
  const fetchBooks = async() =>{
    const response = await axios.get('http://localhost:3012/book');
    setBook(response.data);
  }

  useEffect(()=>fetchBooks(),[]);

   // Create a Book
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3012/book',{
      title
    });
    setBook([...book, response.data ]);
  };

  // Edit the Book
  const editBookById=async (id, newTitle)=>{
    const response = await axios.put(`http://localhost:3012/book/${id}`,{id,title:newTitle});
    console.log(response);
    const updatedBooks = book.map((eachBook)=>{
      if(eachBook.id === id){
        return {...eachBook,...response.data};
      }
      return eachBook;
    })
    setBook(updatedBooks);
  }
  
 // Delete a Book
  const deleteHandler= async(id)=> {
    await axios.delete(`http://localhost:3012/book/${id}`);
    
    const updatedArray = book.filter((eachBook) => {
      return eachBook.id !== id;
    });
    setBook(updatedArray);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList bookArray={book} deleteBook={deleteHandler} editBook={editBookById}/>
      <BookCreate addBook={createBook} />
    </div>
  );
}

export default App;
