import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import pages
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";

// Import components
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SearchBooks} />
          <Route exact path="/search" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
