import bookImg from "../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] container my-8 mx-auto rounded-2xl">
      <div className="hero-content flex-col w-full justify-between lg:flex-row-reverse">
        <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="text-5xl font-bold leading-16 mb-8">
            Books To Freshen Up <br /> Your Bookshelf!
          </h1>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
