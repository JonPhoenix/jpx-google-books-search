import React from "react";
import "../../css/style.css";

function Card({title, children}) {
  return (
    <div className="card mt-4">
      <div className="card-header">
          <strong>
             {title}
          </strong>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
