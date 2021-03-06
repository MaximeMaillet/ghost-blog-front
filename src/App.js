import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import './App.scss';

import Home from './Routes/Home';
import Post from './Routes/Post';
import Story from './Routes/Story';
import Novel from './Routes/Novel'
import NotFound from './Routes/NotFound';

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/histoires/:slug" component={Post} />
        <Route exact path="/recueils/:slug" component={Story} />
        <Route name="novel" exact path="/romans/:slug" component={Novel} />
        <Route name="novel-chapter" exact path="/romans/:slug/chapitre-:chapter" component={Novel} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
