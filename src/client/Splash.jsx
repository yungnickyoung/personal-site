import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import './css/splash.css';

/**
 * Welcome splash screen
 */
export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Animate the "See my portfolio" button on mouse enter
   */
  buttonEnter = () => {
    document.getElementById('arrow-svg').classList.add('arrow-svg-hover');
    document.getElementById('svg-path').classList.add('svg-path-hover');
  }

  /**
   * Animate the "See my portfolio" button on mouse leave
   */
  buttonLeave = () => {
    document.getElementById('arrow-svg').classList.remove('arrow-svg-hover');
    document.getElementById('svg-path').classList.remove('svg-path-hover');
  }

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <div id="home" style={{ position: 'absolute', top: '0px', left: '0' }}></div>

        <div className="container-fluid height-100 px-0" style={{ overflow: "hidden" }}>
          <div className="splash">
            <div className="row align-items-center justify-content-center height-100">
              <div className="col">
                <div className="welcome-text px-3 wow bounce pb-2 pb-md-4" style={{fontSize: "calc(16px + 3vw"}}>Hi!</div>
                <div className="welcome-text px-3 wow fadeIn pb-1 pb-md-3 delay-1s">My name is <span className="highlight">Nick Young</span>, a.k.a. <span className="highlight">YUNG</span>.</div>
                <div className="sub-text px-3 wow fadeIn pb-md-4 delay-2s">I am a <span className="highlight">software developer</span> and well-known <span className="highlight">Minecraft Modder</span>.</div>
                <a
                  role="button"
                  className="mt-1 mt-md-3 mt-lg-4 btn btn-outline-secondary btn-lg wow fadeIn delay-3s"
                  onClick={() => {
                    this.props.onClickButton(1);
                    this.props.scrollToTarget("projects");
                  }}
                  onMouseEnter={this.buttonEnter}
                  onMouseLeave={this.buttonLeave}
                  style={{fontSize: "calc(16px + 1vw)"}}
                >
                  View my work
                  <svg id="arrow-svg" className="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path id="svg-path" className="svg-path" fill="#48c08c" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  scrollToTarget: PropTypes.func.isRequired
};