import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeaderNav } from './components';
import { Home, Settings } from './pages';
import configureStore from './store/store';
import './styles/App.scss';

export const store = configureStore();

function App() {
  const themeColor = store.getState().settings.setColorTheme;
  const isDarkMode = themeColor === '#CED6E0';
  return (
    <Provider store={store}>
      <div className={isDarkMode ? 'app dark' : 'app'}>
        <Router>
          <div className="header-nav">
            <HeaderNav themeColor={themeColor} />
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
