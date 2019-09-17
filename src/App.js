import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderNav } from "./components";
import { Home, About } from "./pages";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="HeaderNav">
        <HeaderNav/>
      </div>
      <div className="RouterOutlet">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
