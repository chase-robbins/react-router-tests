import './App.css';
import React from 'react';
import Nav from './Nav.js';
import Shop from './Shop.js';
import About from './About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />

      </div>
    </Router>
  );
}

export default App;
