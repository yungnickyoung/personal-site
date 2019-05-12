import React from 'react';
import PropTypes from 'prop-types';
import Navlink from './Navlink';
import './css/navbar.css';

export default function Navbar(props) {
  const states = props.tabStates;
  return (
    <>
      <nav className="navbar sticky-top navbar-expand navbar-dark" style={{ backgroundColor: "#1c2026", borderWidth: "0 0 8px", borderStyle: "solid", borderColor: "#48c08c" }}>
        <div className="container flex-column flex-md-row">
          <ul className="navbar-nav flex-row">
            <li className="nav-item px-1 px-md-3" key={0}>
              <Navlink isActive={states[0]} text="HOME" onClick={() => { props.onClickTab(0); props.scrollFunc("home"); }} />
            </li>
            <li className="nav-item px-1 px-md-3" key={1}>
              <Navlink isActive={states[1]} text="PORTFOLIO" onClick={() => { props.onClickTab(1); props.scrollFunc("projects"); }} />
            </li>
            {/* <li className="nav-item px-1 px-md-3" key={2}>
              <Navlink isActive={states[2]} onClick={() => {this.props.onClickTab(2); this.props.scrollFunc("skills");}} text="Skills"/>
            </li> */}
            <li className="nav-item px-1 px-md-3" key={3}>
              <Navlink isActive={states[3]} text="EXPERIENCE" onClick={() => { props.onClickTab(3); props.scrollFunc("experience"); }} />
            </li>
            <li className="nav-item px-1 px-md-3" key={4}>
              <Navlink isActive={states[4]} text="CONTACT" onClick={() => { props.onClickTab(4); props.scrollFunc("contact"); }} />
            </li>
          </ul>
          <ul className="navbar-nav ml-none ml-md-auto flex-row d-none d-md-flex">
            <li className="nav-item">
              <a className="nav-link py-2 icon" href="https://github.com/yungnickyoung" target="_blank" rel="noopener" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", width: "1.5rem", height: "1.5rem", verticalAlign: "text-top" }} viewBox="0 0 512 499.36" role="img" focusable="false">
                  <title>GitHub</title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="nav-link py-2 icon" href="https://www.linkedin.com/in/yungnickyoung/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", width: "1.5rem", height: "1.5rem", verticalAlign: "text-top" }} viewBox="0 0 24 24" role="img" focusable="false">
                  <title>LinkedIn</title>
                  <path
                    fill="currentColor" 
                    fillRule="evenodd" 
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  tabStates: PropTypes.array.isRequired,
  onClickTab: PropTypes.func.isRequired,
  scrollFunc: PropTypes.func.isRequired
};