import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { setCurrentUser, signOut, clearErrorCurrentUser } from './store/actions/authAction';

// import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import TodoPage from './pages/TodoPage';
import SettingPage from './pages/SettingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SignOutPage from './pages/SignOutPage';
import Header from './components/header/Header';

class App extends Component {
  componentDidMount() {
    if (!this.props.currentUser.token && localStorage.getItem('jwt')) {
      this.props.setCurrentUser(localStorage.getItem('jwt'));
    };
  };

  componentDidUpdate() {
    if (this.props.currentUser) {
      if (this.props.currentUser.error) {
        this.props.clearErrorCurrentUser(this.props.currentUser);
      }
    }
  }

  PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          this.props.currentUser.token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin"
              }}
            />
          )
        }
      />
    );
  };
  
  render() {
    const currentUser = this.props.currentUser;

    return (
        <div>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path='/' component={PostPage} />
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <this.PrivateRoute path='/signout' component={SignOutPage} />
            <this.PrivateRoute exact path='/post' component={PostPage} />
            <this.PrivateRoute path='/todo' component={TodoPage} />
            <this.PrivateRoute path='/setting' component={SettingPage} />
            <Redirect to='/' />
          </Switch>
        </div>
      );
  }; 
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
  setCurrentUser,
  signOut,
  clearErrorCurrentUser
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
