import './styles/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import CityDetails from './pages/CityDetails';
import Map from './pages/Map';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          path="/cities/details/:cityId"
          render={(props) => <CityDetails {...props} />}
        />
        <Route exact path="/map" component={Map} />
      </Switch>
    </div>
  );
}

export default App;
