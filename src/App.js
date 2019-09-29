import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderNav } from './components';
import { Home, Settings } from './pages';
import './styles/App.scss';

function App() {
  const themeColor = useSelector(state => state.settings.updateSettings.themeColor);
  const isDarkMode = themeColor === '#CED6E0';
  return (
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
  );
}

export default App;
