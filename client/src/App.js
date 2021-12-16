import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      </Switch>
    </div>
  );
}

export default App;
