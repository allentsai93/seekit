import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/jobs" component={Results} />
    </BrowserRouter>
  );
}

export default App;
