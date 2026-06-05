import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({children}) => {

      //state
  const [storedBooks, setStoredBooks] = useState([]);

  //event handling function
const handleMarkAsRead = (currentBook) =>{

  const doesBookExist = storedBooks.find((eachBook)=>eachBook.bookId === currentBook.bookId);

  if(doesBookExist){
    alert("this book already exists!!!");
  }else{
    setStoredBooks([...storedBooks,currentBook]);
    alert(`${currentBook.bookName} is added to the list`)
  }
  console.log(currentBook, storedBooks, 'book');
}

//passing the state variable, setter function and the event handling function 
    const data = {
       storedBooks, setStoredBooks, handleMarkAsRead
    }

    return (
     <BookContext.Provider value={data}>
        {children}
     </BookContext.Provider>
    //  whatever you send in the value of bookcontext.provider, you can recieve it from anywhere.
    );
};

export default BookProvider;