import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {

    const linkedIn = require('./static/images/LinkedIn.svg');
    const gitHub = require('./static/images/GitHub-Mark-64px.png');

    return (
      <div className='footer-parent'>
        <div className='footer'>
          <div className='hello'><h2>Say hello</h2></div>
          <span><a href="mailto:katielkrieger@gmail.com" className="nostyle glyphicon glyphicon-envelope"></a></span>
          <span><a href="https://www.linkedin.com/in/katie-krieger-187a7347/"><img src={linkedIn} alt="LinkedIn"/></a></span>
          <span><a href="https://github.com/katielkrieger"><img src={gitHub} alt="GitHub"/></a></span>
        </div>
      </div>
    )
  }
}


export default Footer;