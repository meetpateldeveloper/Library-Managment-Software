import { createContext,useState,useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
    
  // State of Books Array
  const [book, setBook] = useState([]);

  // Fatches all the Books
 const fetchBooks = useCallback(async() =>{
   const response = await axios.get('http://localhost:3012/book');
   setBook(response.data);
 },[])



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
   const updatedBooks = book.map((eachBook)=>{
     if(eachBook.id === id){
       return {...eachBook,...response.data};
     }
     return eachBook;
   })
   setBook(updatedBooks);
 }
 
// Delete a Book
 const deleteBookById= async(id)=> {
   await axios.delete(`http://localhost:3012/book/${id}`);
   
   const updatedArray = book.filter((eachBook) => {
     return eachBook.id !== id;
   });
   setBook(updatedArray);
 }

 const valueToShare= {
  book,
  fetchBooks,
  deleteBookById,
  editBookById,
  createBook
 };


    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
}

export {Provider};
export default BooksContext;