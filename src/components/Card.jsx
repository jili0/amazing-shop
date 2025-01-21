const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img className="card-cover w-2 h-4" src={cover} />
      <div className="card-info w-2 h-1 px-1 f-1">
        <p className="card-title">{title}</p>
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

export default Card;
