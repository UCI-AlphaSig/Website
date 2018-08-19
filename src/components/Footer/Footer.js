import React, {Component} from "react";
import "./Footer.css";
import {Button} from "react-materialize";

class Footer extends Component{
  render(){
    return(
      <div className="Footer">
        <Button> this is a materialize button </Button>
        THIS IS THE FOOTER COMPONENT
      </div>
    );
  };
};

export default Footer;