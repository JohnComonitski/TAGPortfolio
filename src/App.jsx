import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mobile">
            <Home2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
