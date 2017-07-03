import React, { Component } from 'react';
import './ProjectDetail.css';

class ProjectDetail extends Component {
  render() {

    return (
      <div className='container-fluid'>
        <div className="detail row">
          <div className="col-sx-12 col-md-6 col-md-offset-3">
            <h3>About</h3>
            <div className="description">{this.props.description}</div>
            <div>
              <a href={this.props.url} alt={this.props.name}>
                <span className="glyphicon glyphicon-link"></span> View website
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectDetail;