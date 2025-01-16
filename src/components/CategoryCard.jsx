import { useContext, useRef } from "react";
import colorsContext from "../contexts/colorsContext.jsx";

const CategoryCard = ({ description, cover }) => {
  const colors = useContext(colorsContext);
  const coverImgRef = useRef();

  if (coverImgRef.current) {
    coverImgRef.current.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="category-card card">
      <img className="card-cover" src={cover} ref={coverImgRef} />
      <div className="card-info">
        <div>
          <p className="card-description">{description}</p>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#aaa"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
