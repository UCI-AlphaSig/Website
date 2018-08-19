import React, { Component } from 'react';

//import page routing for react
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import './App.css';

//import materialize css and js
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

//import pages
import HomePage from "./pages/HomePage";
import RecruitmentPage from "./pages/RecruitmentPage";
import PageNotFound from "./pages/PageNotFound";

//import components
import Footer from "./components/Footer";

//page
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
        <Footer/>
      </div>
    );
  };
};

export default App;
