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
        <a id="home"></a>
        <Header />
        <a id="about"></a>
        <AboutMe />
        <a id="portfolio"></a>
        <Portfolio />
        <a id="contact"></a>
        <Footer />
      </div>
    );
  }
}

export default App;
