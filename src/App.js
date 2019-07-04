import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";

import './App.css';

import Home from './Routes/Home';
import Post from './Routes/Post';

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:slug" component={Post} />
      </Switch>
    );
  }
}

export default withRouter(App);