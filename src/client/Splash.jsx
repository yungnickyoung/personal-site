import React from 'react';
import PropTypes from 'prop-types';
import SemipolarSpinner from '@bit/bondz.react-epic-spinners.semipolar-spinner';
import './css/splash.css';
import './css/sass.css';

export default function Splash(props) {
  return (
      <div className="container-fluid height-100 px-0" style={{ overflow: "hidden" }}>
        <div className="splash">
          <div className="row align-items-center justify-content-center height-100">
            <div className="col">
              <h1 className="welcome-text">Hi, my name is <span className="highlight">Nick Young</span></h1>
              <h1 className="sub-text">I'm a <span className="highlight">full-stack</span> web &amp; software developer</h1>
              <a role="button" className="my-5 btn btn-primary btn-lg" onClick={() => {props.onClickButton(0); props.scrollFunc("projects");}}>See my work</a>
              <center><SemipolarSpinner className="my-4" color="#48c08c" size={200} animationDuration={20000} /></center>
            </div>
          </div>
        </div>
      </div>
  );
}

Splash.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  scrollFunc: PropTypes.func.isRequired
};