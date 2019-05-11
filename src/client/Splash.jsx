import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import './css/splash.css';
import './css/sass.css';

export default function Splash(props) {
  return (
    <>
      <div id="home" style={{ position: 'absolute', top: '0px', left: '0' }}></div>

      <div className="container-fluid height-100 px-0" style={{ overflow: "hidden" }}>
        <div className="splash">
          <div className="row align-items-center justify-content-center height-100">
            <div className="col">
              <h1 className="welcome-text px-3">Hi, my name is <span className="highlight">Nick Young</span></h1>
              <h1 className="sub-text px-3 pt-3">I'm a <span className="highlight">full-stack</span> web &amp; software developer</h1>
              <a role="button" className="my-5 btn btn-primary btn-lg" onClick={() => { props.onClickButton(1); props.scrollFunc("projects"); }}>See my work</a>
              <center>
                <Spinner />
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Splash.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  scrollFunc: PropTypes.func.isRequired
};