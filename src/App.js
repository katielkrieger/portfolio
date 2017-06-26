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
        <Header />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
