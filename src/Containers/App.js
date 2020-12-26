import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import Signup from './Signup';
class App extends Component {
  componentDidMount () {
    // this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/signin" component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated && this.props.userType === 'provider') {
      routes = (
        <Switch>
          <Route path="/orders" component={Home} />
          <Redirect to="/orders" />
        </Switch>
      );
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
    ,userType: state.auth.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );