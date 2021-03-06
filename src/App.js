import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";

//pages
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import Facts from "./pages/Facts";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="pictures">Pictures</Link>
        <Link to="facts">Facts</Link>
      </nav>
      <div className="App">
        <Router>
          <Home path="/" />
          <Pictures path="/pictures" />
          <Facts path="/facts" />
        </Router>
      </div>
    </>
  );
}

export default App;
