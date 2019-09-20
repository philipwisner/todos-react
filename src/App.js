import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeaderNav } from './components';
import { Home, Settings } from './pages';
import configureStore from './store/store';
import './styles/App.scss';

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <div className="header-nav">
            <HeaderNav />
          </div>
          <div className="router-outlet">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
