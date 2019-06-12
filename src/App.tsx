import React from "react";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import history from "./history";
import Landing from "./pages/Landing";
import Results from "./pages/Results";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/jobs/:title" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
