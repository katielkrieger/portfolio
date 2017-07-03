import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import './Header.css';

const image = require('./static/images/image.jpg');

class Header extends Component {
  render() {

    return (
      <div className='header'>
        <MyNavbar />
        <div className="image-holder">
          <img src={image} alt="Katie Krieger"/>
          <div className="text">
            <h2>Katie Krieger</h2>
            <h4>A web developer with full-stack experience</h4>
            <div className="glyphicon glyphicon-chevron-down"></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Header;