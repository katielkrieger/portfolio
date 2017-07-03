import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a id="home">&nbsp;</a>
        <Header />
        <a id="about">&nbsp;</a>
        <AboutMe />
        <a id="portfolio">&nbsp;</a>
        <Portfolio />
        <a id="contact">&nbsp;</a>
        <Footer />
      </div>
    );
  }
}

export default App;
