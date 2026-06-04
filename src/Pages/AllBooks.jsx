
import { use } from "react";
import BookCard from "../UI/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  // console.log(books)//array of objects(each object is a book)
  
  return (
    <div className="container mx-auto">

      <h2 className="text-center text-4xl font-bold mb-8">All Books</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {books.map((eachBook, index) => {

        return (
  <BookCard eachBook={eachBook} key={index}/>
        );
      })}
      </div>
    </div>
  );
};

export default AllBooks;
