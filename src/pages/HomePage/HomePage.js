import React, { Component } from "react";
import "./HomePage.css";
import {Carousel} from "react-materialize";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Carousel options={{ fullWidth: true, indicators: true }}>
          <div className='red'>
            <h2>First Panel</h2>
            <p className='white-text'>This is your first panel</p>
          </div>
          <div className='amber'>
            <h2>Second Panel</h2>
            <p className='white-text'>This is your second panel</p>
          </div>
          <div className='green'>
            <h2>Third Panel</h2>
            <p className='white-text'>This is your third panel</p>
          </div>
          <div className='blue'>
            <h2>Fourth Panel</h2>
            <p className='white-text'>This is your fourth panel</p>
          </div>
        </Carousel>
      </div>
    );
  };
};

export default HomePage;