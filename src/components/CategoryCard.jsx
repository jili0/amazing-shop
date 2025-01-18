const CategoryCard = ({ title, cover }) => {
  return (
    <div className="card mx-1 px-1 mb-4">
      <img className="card-cover" src={cover} height="300" width="200"/>
      <div className="card-info p-1">
        <div>
          <p className="card-title px-1">{title}</p>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
