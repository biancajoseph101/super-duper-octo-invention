import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import CityCard from './components/CityCard';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />

        <Route exact path="/cities" component={CityCard} />
      </Switch>
    </div>
  );
}

export default App;
