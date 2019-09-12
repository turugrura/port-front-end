import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import TodoPage from './pages/TodoPage';
import SettingPage from './pages/SettingPage';
import AuthPage from './pages/AuthPage';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/post' component={PostPage} />
        <Route path='/todo' component={TodoPage} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/setting' component={SettingPage} />
      </Switch>
    </div>
  );
}

export default App;
