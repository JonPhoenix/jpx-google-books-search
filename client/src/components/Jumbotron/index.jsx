import React from "react";
import "../../css/style.css";

function Jumbotron({ children }) {
  return (
    <>
      <div
        style={{
          height: 250,
          clear: "both",
          paddingTop: 85,
          textAlign: "center",
        }}
        className="jumbotron mt-4 jumbo-style"
      >
        {children}
      </div>
    </>
  );
}

export default Jumbotron;
