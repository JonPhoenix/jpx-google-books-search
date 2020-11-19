import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import pages
import SearchBooks from "./pages/SearchBooks";
// import SavedBooks from "./pages/SavedBooks";

// Import components
import NavBar from "./components/NavBar";
// Header

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Banner /> */}
      <Switch>
        <Route exact path={"/"}>
          <SearchBooks />
        </Route>
        {/* <Route exact path={"/saved"}>
          <SavedBooks />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
