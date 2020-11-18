import React from "react";

function BookCard(props) {
  return (
    <div className="card mb-3">
      <div className="card-header text-right">
        <button
          onClick={props.buttonClicked}
          id={props.book._id}
          index={props.index}
          className="btn btn-primary"
        >
          {props.buttonText}
        </button>
      </div>
      <div className="row no-gutters">
        <div className="col">
          <img
            src={props.book.image}
            className="img-thumbnail"
            style={{ width: "auto", height: "300px" }}
            alt="Book"
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h4 className="card-title">
              <a href={props.book.link}>{props.book.title}</a>
            </h4>
            <h5 className="card-title">{"Written by " + props.book.authors}</h5>
            <p className="card-text">{props.book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
