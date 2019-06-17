import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Content from './Content';
import Splash from './Splash';
import WOW from 'wowjs';;

import './css/app.css';

var wow = new WOW.WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStates: Array(5).fill(false) // Keep track of which navbar tab is active
    };
  }

  // Used for setting the active tab of the navbar.
  // Navbar uses this to determine which tab should have the green active color
  setActiveTab = (i) => {
    let newTabStates = Array(5).fill(false);
    newTabStates[i] = true;
    this.setState({
      tabStates: newTabStates
    });
    var isSmoothScrollSupported = false;
  }

  // Used for smooth scrolling to a section after clicking its link in the navbar
  scrollToTarget = (target) => {
    let options = {};
    if (this.isSmoothScrollSupported) {
      options.behavior = 'smooth';
    } else {
      options.behavior = 'auto';
    }

    document.getElementById(target).scrollIntoView(options);
  }

  // "scroll" event listening function
  // Used to change the active navbar tab as the user scrolls the page
  onScroll = () => {
    var homeDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("home")).getBoundingClientRect().y);
    var projectsDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("projects")).getBoundingClientRect().y);
    var experienceDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("experience")).getBoundingClientRect().y);
    var contactDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("contact")).getBoundingClientRect().y);

    if (homeDist < 60) {
      this.setActiveTab(0);
    } else if (projectsDist < 20) {
      this.setActiveTab(1);
    } else if (experienceDist < 20) {
      this.setActiveTab(3);
    } else if (contactDist < 60) {
      this.setActiveTab(4);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
    this.isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  footerEnter = () => {
    document.getElementById('footer-svg').classList.add('footer-svg-hover');
    document.getElementById('footer-path').classList.add('footer-path-hover');
  }

  footerLeave = () => {
    document.getElementById('footer-svg').classList.remove('footer-svg-hover');
    document.getElementById('footer-path').classList.remove('footer-path-hover');
  }
  render() {
    return (
      <>
        <div style={{ overflowX: "hidden" }}>
          <Splash onClickButton={i => this.setActiveTab(i)} scrollFunc={targ => this.scrollToTarget(targ)} />
        </div>
        <Navbar tabStates={this.state.tabStates} onClickTab={i => this.setActiveTab(i)} scrollFunc={targ => this.scrollToTarget(targ)} />
        <div style={{ overflowX: "hidden" }}>
          <Content />
        </div>
        <center style={{ backgroundColor: 'white', paddingTop: "10rem", paddingBottom: '11rem'}}>
          <svg id="footer-svg" onMouseEnter={this.footerEnter} onMouseLeave={this.footerLeave} onClick={() => {this.setActiveTab(0); this.scrollToTarget('home');}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path id="footer-path" fill="#48c08c" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path fill="none" d="M0 0h24v24H0V0z" />
          </svg>

        </center>
        {/* <div id="bottom-padding"></div> */}
      </>
    );
  }
}
