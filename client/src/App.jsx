import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import pages
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatchPage from "./pages/NoMatchPage";

// Import components
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
