import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectDetail from './ProjectDetail';
import './Project.css';

class Project extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { 
        visible: false 
      };
  }

  handleClick() {
    this.setState({ 
      visible: ! this.state.visible 
    });
  }
  
  // <button onClick={this.handleClick}>{this.state.visible ? 'Show details' : 'Hide details'}</button>

           // <img src={image}/>

          

  render() {

    let image = require(`${this.props.image}`);

    return (
      <div className="top">
        <div className="project" onClick={this.handleClick} style={{backgroundImage:`url(${image})`}}>
          <div className="children">
            <h3>{this.props.name}</h3>
            <h4>{this.props.technologies}</h4>
          </div>
        </div>
      
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}>
          { this.state.visible ?  (<ProjectDetail 
            className="about"
            name={this.props.name}
            technologies={this.props.technologies}
            description={this.props.description}
            url={this.props.url}
          />) : null }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}


export default Project;
