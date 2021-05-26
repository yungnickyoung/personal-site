import React from 'react';
import PropTypes from 'prop-types';
import Navlink from './Navlink';
import './css/navbar.css';

/**
 * Sticky navbar at the top of the page
 */
export default function Navbar(props) {
  const states = props.tabStates;

  return (
    <>
      <nav className="navbar sticky-top navbar-expand navbar-dark" style={{ backgroundColor: "#1c2026", borderWidth: "0 0 8px", borderStyle: "solid", borderColor: "#48c08c" }}>
        <button className="navbar-toggler d-block d-sm-none border-0" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-none d-sm-flex container flex-column flex-md-row">
          <ul className="navbar-nav flex-row">
            <li className="nav-item px-1 px-md-3" key={0}>
              <Navlink isActive={states[0]} text="HOME" onClick={() => { props.onClickTab(0); props.scrollToTarget("home"); }} />
            </li>
            <li className="nav-item px-1 px-md-3" key={1}>
              <Navlink isActive={states[1]} text="PORTFOLIO" onClick={() => { props.onClickTab(1); props.scrollToTarget("projects"); }} />
            </li>
            {/* <li className="nav-item px-1 px-md-3" key={2}>
              <Navlink isActive={states[2]} onClick={() => {this.props.onClickTab(2); this.props.scrollToTarget("skills");}} text="Skills"/>
            </li> */}
            <li className="nav-item px-1 px-md-3" key={3}>
              <Navlink isActive={states[3]} text="EXPERIENCE" onClick={() => { props.onClickTab(3); props.scrollToTarget("experience"); }} />
            </li>
            <li className="nav-item px-1 px-md-3" key={4}>
              <Navlink isActive={states[4]} text="CONTACT" onClick={() => { props.onClickTab(4); props.scrollToTarget("contact"); }} />
            </li>
          </ul>
          <ul className="navbar-nav ml-none ml-md-auto flex-row d-none d-md-flex">
            <li className="nav-item">
              <a className="nav-link py-2 icon" href="https://twitter.com/yungnickyoung" target="_blank" rel="noopener" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", width: "1.5rem", height: "1.5rem", verticalAlign: "text-top" }} viewBox="0 0 512 499.36" role="img" focusable="false">
                  <title>Twitter</title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"                  
                    d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                       c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                       c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                       c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                       c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                       c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                       C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                       C480.224,136.96,497.728,118.496,512,97.248z"/>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link py-2 icon" href="https://www.youtube.com/c/YUNGNICKYOUNG/" target="_blank" rel="noopener" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", width: "1.5rem", height: "1.5rem", verticalAlign: "text-top" }} viewBox="0 0 16 16" role="img" focusable="false">
                  <title>YouTube</title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link py-2 icon" href="https://discord.gg/rns3beq" target="_blank" rel="noopener" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", width: "1.5rem", height: "1.5rem", verticalAlign: "text-top" }} viewBox="0 0 16 16" role="img" focusable="false">
                  <title>Discord</title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"
                  />
                </svg>
              </a>
            </li>
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
      <div className="collapse d-sm-none" id="navbarToggleExternalContent">
        <ul className="d-flex flex-column my-1 ml-2 p-0">
          <li className="px-1 px-md-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" key={0}>
            <Navlink isActive={states[0]} text="HOME" onClick={() => { props.onClickTab(0); props.scrollToTarget("home"); }} />
          </li>
          <li className="px-1 px-md-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" key={1}>
            <Navlink isActive={states[1]} text="PORTFOLIO" onClick={() => { props.onClickTab(1); props.scrollToTarget("projects"); }} />
          </li>
          {/* <li className="px-1 px-md-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" key={2}>
              <Navlink isActive={states[2]} onClick={() => {this.props.onClickTab(2); this.props.scrollToTarget("skills");}} text="Skills"/>
            </li> */}
          <li className="px-1 px-md-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" key={3}>
            <Navlink isActive={states[3]} text="EXPERIENCE" onClick={() => { props.onClickTab(3); props.scrollToTarget("experience"); }} />
          </li>
          <li className="px-1 px-md-3" data-toggle="collapse" data-target="#navbarToggleExternalContent" key={4}>
            <Navlink isActive={states[4]} text="CONTACT" onClick={() => { props.onClickTab(4); props.scrollToTarget("contact"); }} />
          </li>
        </ul>
      </div>
    </>
  );
}

Navbar.propTypes = {
  tabStates: PropTypes.array.isRequired,
  onClickTab: PropTypes.func.isRequired,
  scrollToTarget: PropTypes.func.isRequired
};