import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import pages
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatchPage from "./pages/NoMatchPage";

// Import components
import NavBar from "./components/NavBar";

// Setup Route components
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path={"/"}>
              <SearchBooks />
            </Route>
            <Route exact path={"/saved"}>
              <SavedBooks />
            </Route>
            <Route>
              <NoMatchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
