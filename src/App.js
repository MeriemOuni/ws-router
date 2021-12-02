import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
      <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
  );
}

export default App;
