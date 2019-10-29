import React from "react";
import NavBar from "./components/NavBar";

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Settings from "./components/Settings";
import MyMatches from "./components/MyMatches";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/Settings" component={Settings} />
          <PrivateRoute path="/MyMatches" component={MyMatches} />
          <PrivateRoute path="/Browse" component={Browse} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;