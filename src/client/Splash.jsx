import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './splash.css';

export default class Splash extends Component {
  render() {
    return (
      <ScrollableAnchor id={"home"}>
        <div className="container-fluid height-100 px-0" style={{overflow: "hidden"}}>
          <div className="splash">
            <div className="row align-items-center justify-content-center height-100">
              <div className="col">
                <h1 className="hi">welcome</h1>
                <br />
                <h1 className="welcome-text">my name is <span className="highlight">nick young</span></h1>
                <h1 className="welcome-text">im a software developer</h1>
                <br />
                <a role="button" className="btn btn-outline-danger btn-lg" style={{transition: "all 2s"}} href="#projects">peep my shit</a>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
