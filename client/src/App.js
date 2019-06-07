import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./components/HomeContainer";
import SignUp from "./components/SignUp/SignUp";
//import logo from "./logo.svg";
//import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/signup" component={SignUp} />
        </main>
      </div>
    </Router>
  );
}

export default App;
