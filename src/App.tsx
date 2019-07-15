import React from "react";
import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="/jobs" />
      <Route path="/jobs" component={Results} />
    </BrowserRouter>
  );
}

export default App;
