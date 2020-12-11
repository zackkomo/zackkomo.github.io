import React from "react";
import "./App.css";
import "./Board.css";
import Nav from "./Nav";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact-me" exact component={Contact} />
          <Route path="/projects/game" component={Game} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
