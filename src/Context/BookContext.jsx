import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  //state for storedBooks
  const [storedBooks, setStoredBooks] = useState([]);

  //event handling function for storedBooks
  const handleMarkAsRead = (currentBook) => {
    //writing program for if the book is in the wishlist it cant be added to the readlist
    const isInWishList = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isInWishList) {
      toast.error("This book is already in your wishlist. Remove it first.");
      return;
    }

    //writing program for if the book already exists in the read list then prevent it from adding and if not then allowing it adding.
    const doesBookExist = storedBooks.find(
      (eachBook) => eachBook.bookId === currentBook.bookId,
    );

    if (doesBookExist) {
      toast.error("It already exists in the read list!!!");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to the Read list`);
    }
  };

  //state for wishList
  const [wishList, setWishList] = useState([]);

  //event handling function for wishList
  const handleWishList = (currentBook) => {
    const isTheBookInTheReadList = storedBooks.find(
      (eachBook) => eachBook.bookId === currentBook.bookId,
    );

    if (isTheBookInTheReadList) {
      toast.error(
        "This book is already marked as read. You can't add it to the wishlist.",
      );
      return;
    }

    const doesBookExist = wishList.find(
      (eachBook) => eachBook.bookId === currentBook.bookId,
    );

    if (doesBookExist) {
      toast.error("It already exists in the wishlist!!!");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to the WishList`);
    }
  };

  //passing the state variable, setter function and the event handling function
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return (
    <BookContext.Provider value={data}>{children}</BookContext.Provider>
    //  whatever you send in the value of bookcontext.provider, you can recieve it from anywhere.
  );
};

export default BookProvider;