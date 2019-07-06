import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import './App.scss';

import Home from './Routes/Home';
import Post from './Routes/Post';
import Story from './Routes/Story';
import Novel from './Routes/Novel'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/histoires/:slug" component={Post} />
        <Route exact path="/recueils/:slug" component={Story} />
        <Route exact path="/romans/:slug" component={Novel} />
      </Switch>
    );
  }
}

export default App;
