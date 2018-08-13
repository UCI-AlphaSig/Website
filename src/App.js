import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import RecruitmentPage from "./pages/RecruitmentPage";
import PageNotFound from "./pages/PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="content">
          <Router>
            <Switch>
              <Route
                exact path="/"
                render = {()=><HomePage/>}
              />
              <Route
                exact path="/recruitment"
                render = {()=><RecruitmentPage/>}
              />
              <Route
                render = {()=><PageNotFound/>}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  };
};

export default App;
