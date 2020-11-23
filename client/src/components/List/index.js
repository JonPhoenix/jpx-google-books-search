import React from "react";
import "../../css/style.css";

// Exports both the List and ListItem components
export const List = ({ children }) => (
  <div className="list-overflow-container">
    <ul className="list-group">
      {children}
    </ul>
  </div>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
