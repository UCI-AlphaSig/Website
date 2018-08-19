import React, { Component } from "react";
import "./HomePage.css";
import { Carousel, Collapsible, CollapsibleItem } from "react-materialize";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Carousel options={{ fullWidth: true, indicators: true, duration:200}}>
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

        <div className="aboutUs">
          <p>THIS IS US AND ALL ABOUT US</p>
        </div>

        <Collapsible>
          <CollapsibleItem header='First' icon='filter_drama'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Second' icon='place'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Third' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>

      </div>
    );
  };
};

export default HomePage;