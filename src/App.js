import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Router';
import './App.css';

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
    <li><NavLink to='/admin'>Admin</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router />
      </div>
    );
  }
};

export default App;
