import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="NavHeader">
        <div href="/" className="NavChildTitle">
          <a href="/">Todos</a>
        </div>
        <div className="NavChildInfo">
          <a href="/about">Info</a>
        </div>
      </h1>
      <Router>
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
