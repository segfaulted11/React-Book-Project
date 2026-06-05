import { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const Books = () => {

    const bookContext = useContext(BookContext);

    const {storedBooks, wishList} = bookContext;
    console.log(storedBooks)//array of objects, this array stores each book that has been 'marked as read' so far.
    console.log(wishList)//array of objects, this array stores each book that has been 'added to wishlist' so far.


    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-3xl">Listed Books Page</h1>
            <p>Readlist : {storedBooks.length}</p> 
            {
                storedBooks.map((eachBook)=><div>
                    <p>{eachBook.bookName}</p>
                </div>)
            }
            <p>Readlist : {wishList.length}</p> 
            {
                wishList.map((eachBook)=><div>
                    <p>{eachBook.bookName}</p>
                </div>)
            }
        </div>
    );
};

export default Books;