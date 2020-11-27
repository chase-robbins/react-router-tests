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
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
);

export default App;
