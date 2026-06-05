import { use, useContext, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../Context/BookContext";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  //suppose you clicked on the "The Alchemist" book whose id is 8, now ->

  const params = useParams();
  // console.log(params); //{bookId : '8'}

  //deconstructing from the params
  const { bookId } = params;
  // console.log(bookId); //8

  //fetching the data
  const books = use(booksPromise);
  // console.log(books); //array of objects

  //finding the book object that has been clicked on
  const expectedBook = books.find((eachBook) => eachBook.bookId == bookId);
  // console.log("expected book", expectedBook); //returns the element(object of a book) that matches the condition

  if (!expectedBook) {
    return <p>Book not found</p>;
  }

  //deconstructing the expectedBook object
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
    tags,
    category,
  } = expectedBook;

  //declaring the useContext function to invoke BookContext
  const bookContext = useContext(BookContext);
  console.log(bookContext);
  //the bookContext obj stores state variable, setter function and the event handling function. now deconstructing -
  const { handleMarkAsRead, handleWishList } = bookContext;

  // moving the state and event handling function from here to the BookContext.jsx file within the BookProvider component.

  return (
    <div>
      <h2 className="text-center text-4xl font-bold">book details</h2>

      <div className="card gap-2 lg:card-side bg-base-100 shadow-sm container mx-auto">
        <figure>
          <img src={image} className="h-[400px] w-[1700px]" />
        </figure>

        <div className="">
          <h2 className="text-2xl">{bookName}</h2>
          <p className="">By : {author}</p>
          <p className="py-2 border-y">{category}</p>
          <b>Review : </b> <p>{review}</p>
          {
            <div className="card-actions justify-start border-b">
              <b> Tag : </b>
              {tags.map((eachTag, index) => {
                return (
                  <div
                    className="badge badge-outline bg-green-100 text-green-500 font-bold"
                    key={index}
                  >
                    #{eachTag}
                  </div>
                );
              })}
            </div>
          }
          <p>Number of Pages : {totalPages}</p>
          <p>Publisher : {publisher}</p>
          <p>Year of Publishing : {yearOfPublishing}</p>
          <p>Rating : {rating}</p>
          <div className="card-actions">
            <button
              className="btn btn-soft"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark As Read
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleWishList(expectedBook)}
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
