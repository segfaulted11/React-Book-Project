import { Star } from "lucide-react";

const BookCard = ({ eachBook }) => {
  const { bookName, image, author, category, rating, tags } = eachBook;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="p-6 rounded-xl bg-base-300">
          <img src={image} className="rounded-xl h-62.5" />
        </figure>
        <div className="card-actions justify-start">
          {tags.map((eachTag, index) => {
            return (
              <>
                <div
                  className="badge badge-outline bg-green-100 text-green-500 font-bold"
                  key={index}
                >
                  {eachTag}
                </div>
              </>
            );
          })}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
        </div>

        <div className="flex justify-between border-t border-dashed border-gray-400 py-4">
          <p>{category}</p>
          <div className="flex">
            <p>{rating}</p>
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;