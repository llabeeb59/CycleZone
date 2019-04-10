import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Main from './comp/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Main } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
