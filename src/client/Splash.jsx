import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import './css/splash.css';
import './css/sass.css';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  buttonEnter = () => {
    document.getElementById('arrow-svg').classList.add('arrow-svg-hover');
    document.getElementById('svg-path').classList.add('svg-path-hover');
  }

  buttonLeave = () => {
    document.getElementById('arrow-svg').classList.remove('arrow-svg-hover');
    document.getElementById('svg-path').classList.remove('svg-path-hover');
  }

  render() {
    return (
      <>
        <div id="home" style={{ position: 'absolute', top: '0px', left: '0' }}></div>

        <div className="container-fluid height-100 px-0" style={{ overflow: "hidden" }}>
          <div className="splash">
            <div className="row align-items-center justify-content-center height-100">
              <div className="col">
                <div className="welcome-text px-3 wow bounce" style={{fontSize: "4rem"}}>Hi!</div>
                <div className="welcome-text px-3 wow fadeIn delay-1s">My name is <span className="highlight">Nick Young</span></div>
                <div className="sub-text px-3 pt-3 wow fadeIn delay-2s">I'm a <span className="highlight">full-stack</span> web &amp; software developer</div>
                <a
                  role="button"
                  className="my-5 btn btn-outline-secondary btn-lg wow fadeIn delay-3s"
                  onClick={() => {
                    this.props.onClickButton(1);
                    this.props.scrollFunc("projects");
                  }}
                  onMouseEnter={this.buttonEnter}
                  onMouseLeave={this.buttonLeave}
                >
                  See my portfolio
                  <svg id="arrow-svg" className="arrow-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path id="svg-path" className="svg-path" fill="#48c08c" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                  </svg>
                </a>
                <div className="d-flex text-center justify-content-center">
                  <Spinner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Splash.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  scrollFunc: PropTypes.func.isRequired
};