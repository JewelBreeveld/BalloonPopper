import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./components/HomeContainer";
//import SignUp from "./components/SignUp/SignUpForm";
import SignUpForm from "./components/SignUp/SignUpForm";
//import logo from "./logo.svg";
//import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/signup" component={SignUpForm} />
        </main>
      </div>
    </Router>
  );
}

export default App;
