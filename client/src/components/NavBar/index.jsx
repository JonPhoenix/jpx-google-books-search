import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-start">
      <span className="nav-brand">Google Books</span>
      <a className="nav-link" href="/">
        Search
      </a>
      <a className="nav-link" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default NavBar;
