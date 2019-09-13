import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import TodoPage from './pages/TodoPage';
import SettingPage from './pages/SettingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/header/Header';

class App extends Component {
  render() {
    const currentUser = this.props.currentUser;

    return (
        <div>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/post' component={PostPage} />
            <Route path='/todo' component={TodoPage} />
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/setting' component={SettingPage} />
          </Switch>
        </div>
      );
  }; 
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default withRouter(connect(
  mapStateToProps,
  {}
)(App));
