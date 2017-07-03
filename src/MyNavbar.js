import React, { Component } from 'react';
import './MyNavbar.css';
import { Navbar,
         Nav,
         NavItem,
         DropdoownButton,
         MenuItem } from 'react-bootstrap';


class MyNavbar extends Component {
  render() {

    return (
      <div className="navbar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Katie Krieger</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#about">About me</NavItem>
              <NavItem eventKey={2} href="#portfolio">Portfolio</NavItem>
              <NavItem eventKey={3} href="#contact">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MyNavbar;