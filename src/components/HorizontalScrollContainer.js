import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -1300, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 1300, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="relative ">
      <button
        onClick={scrollLeft}
        className=" absolute left-0 top-20  bg-black border border-white p-2 rounded-full shadow-md  focus:outline-none"
      >
        <FaChevronLeft />
      </button>
      <div
        ref={scrollRef}
        className=" overflow-x-auto py-2 whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-20   bg-black border border-white p-2 rounded-full shadow-md focus:outline-none"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HorizontalScrollContainer;
