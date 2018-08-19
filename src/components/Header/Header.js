import React, {Component} from "react";
import {Navbar, NavItem} from "react-materialize"; 
import "./Header.css";

class Header extends Component{
    render () {
        return(
            <Navbar className="Header" brand= {<a href="/"><img src="Images/Flag.png" alt="Alpha Sigma Phi Flag" className="Flag_img"/></a>} right>
                <NavItem href='/recruitment'>Recruitment</NavItem>
            </Navbar>
        );
    };
};

export default Header;