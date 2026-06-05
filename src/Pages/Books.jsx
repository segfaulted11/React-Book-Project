import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FileSpreadsheet, Frown, MapPin, Users } from "lucide-react";

const Books = () => {
  const bookContext = useContext(BookContext);

  //deconstructing the bookContext object
  const { storedBooks, wishList } = bookContext;

  // console.log(storedBooks)//array of objects, this array stores each book that has been 'marked as read' so far.
  // console.log(wishList)//array of objects, this array stores each book that has been 'added to wishlist' so far.

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-3xl">Listed Books Page</h1>

      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <p>Readlist : {storedBooks.length}</p>

          {storedBooks.length === 0 ? (
            <div className="container mx-auto bg-base-300 h-60 flex justify-center items-center">
              <Frown />
              <p className="font-bold text-3xl">
                No books added to the Readlist yet!
              </p>
              <Frown />
            </div>
          ) : (
            storedBooks.map((eachBook) => {
              const {
                image,
                bookName,
                author,
                bookId,
                tags,
                yearOfPublishing,
                publisher,
                totalPages,
                category,
                rating,
              } = eachBook;

              return (
                <div className="border  border-amber-950 mb-4" key={bookId}>
                  <div className="flex gap-5">
                    <img src={image} className="w-[130px] h-[172px]" alt="" />
                    <div>
                      <p>{bookName}</p>
                      <p>By : {author}</p>

                      <div className="flex gap-5">
                        <p className="font-bold">Tag</p>
                        {tags.map((eachTag) => {
                          return (
                            <button className="btn btn-soft text-green-600">
                              #{eachTag}
                            </button>
                          );
                        })}

                        <div className="flex">
                          <MapPin></MapPin>
                          <p>Year of Publishing {yearOfPublishing}</p>
                        </div>
                      </div>

                      <div className="flex gap-3  border-b">
                        <Users />
                        <p>Publisher : {publisher}</p>
                        <FileSpreadsheet />
                        <p>Page {totalPages}</p>
                      </div>

                      <button className="btn btn-soft btn-info">
                        Category : {category}
                      </button>
                      <button className="btn btn-soft btn-warning">
                        Rating : {rating}
                      </button>
                      <button className="btn btn-success">View Details</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </TabPanel>

        <TabPanel>
          <p>Wishlist : {wishList.length}</p>

          {storedBooks.length === 0 ? (
            <div className="container mx-auto bg-base-300 h-60 flex justify-center items-center">
              <Frown />
              <p className="font-bold text-3xl">
                No books added to the WishList yet!
              </p>
              <Frown />
            </div>
          ) : (
            wishList.map((eachBook) => {
              const {
                image,
                bookName,
                author,
                bookId,
                tags,
                yearOfPublishing,
                publisher,
                totalPages,
                category,
                rating,
              } = eachBook;

              return (
                <div className="border border-amber-950 mb-4" key={bookId}>
                  <div className="flex gap-5">
                    <img src={image} className="w-[130px] h-[172px]" alt="" />
                    <div>
                      <p>{bookName}</p>
                      <p>By : {author}</p>

                      <div className="flex gap-5">
                        <p className="font-bold">Tag</p>
                        {tags.map((eachTag) => {
                          return (
                            <button className="btn btn-soft text-green-600">
                              #{eachTag}
                            </button>
                          );
                        })}

                        <div className="flex">
                          <MapPin></MapPin>
                          <p>Year of Publishing {yearOfPublishing}</p>
                        </div>
                      </div>

                      <div className="flex gap-3  border-b">
                        <Users />
                        <p>Publisher : {publisher}</p>
                        <FileSpreadsheet />
                        <p>Page {totalPages}</p>
                      </div>

                      <button className="btn btn-soft btn-info">
                        Category : {category}
                      </button>
                      <button className="btn btn-soft btn-warning">
                        Rating : {rating}
                      </button>
                      <button className="btn btn-success">View Details</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
