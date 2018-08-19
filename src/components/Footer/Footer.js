import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component{
  render(){
    return(
      <div className="Footer">
        <hr/>

        <ol className="content">
          <li>email: testemail@test.com</li>
          <li>
            <ol>
              <li><a href="#">link1</a></li>
              <li><a href="#">link2</a></li>
              <li><a href="#">link3</a></li>
            </ol>
          </li>
        </ol>
        ©Copyright 2018 all rights reserved
        



      </div>
    );
  };
};

export default Footer;