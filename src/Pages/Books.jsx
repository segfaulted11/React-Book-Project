import { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const Books = () => {

    const bookContext = useContext(BookContext);

    const {storedBooks} = bookContext;
    console.log(storedBooks)//array of objects, this array stores each book that has been 'marked as read' so far.


    return (
        <div>
            <h1 className="text-center font-bold text-3xl">Listed Books Page</h1>
        </div>
    );
};

export default Books;