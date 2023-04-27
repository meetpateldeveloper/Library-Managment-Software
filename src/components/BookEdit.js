import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book,onEditClickHandler}){
    const [title,setTitle] = useState(book.title)
    const {editBookById}=useBooksContext();

const handleChange =(event)=>{
    setTitle(event.target.value);
};

const handleSubmit = (event) =>{
    event.preventDefault();
    editBookById(book.id,title);
    onEditClickHandler();
}

    return (<form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
    </form>);
}

export default BookEdit;