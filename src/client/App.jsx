import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Content from './Content';
import Splash from './Splash';
import Footer from './Footer';
import ModalList from './ModalList';
import WOW from 'wowjs';

import './css/app.css';
import './css/sass.css';



/**
 * My personal website, at www.yungnickyoung.com
 *
 * @version 1.1.2
 * @author [Nick Young](https://github.com/yungnickyoung)
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStates: Array(5).fill(false) // Keep track of which navbar tab is active
    };
  }

  /** 
   * Set the active tab of the navbar.
   * Navbar uses this to determine which tab should have the green active text color.
   * 
   * @param {number} tabID ID of tab to set as active
   */
  setActiveTab = (tabID) => {
    let newTabStates = Array(5).fill(false);
    newTabStates[tabID] = true;
    this.setState({
      tabStates: newTabStates
    });
  }

  /**
   * Scroll to the element with the specified ID. Will use smooth scrolling if available.
   * 
   * @param {number} id ID of the element to scroll to
   */
  scrollToTarget = (id) => {
    let options = {};
    if (this.isSmoothScrollSupported) {
      options.behavior = 'smooth';
    } else {
      options.behavior = 'auto';
    }

    document.getElementById(id).scrollIntoView(options);
  }

  /**
   * "scroll" event listening function.
   * Used to change the active navbar tab as the user scrolls up or down the page.
   */
  onScroll = () => {
    // Check which element is closest to the viewport
    var homeDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("home")).getBoundingClientRect().y);
    var projectsDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("projects")).getBoundingClientRect().y);
    var experienceDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("experience")).getBoundingClientRect().y);
    var contactDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("contact")).getBoundingClientRect().y);

    // Set active tab accordingly
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

  /**
   * Bind "scroll" event to onScroll function.
   */
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
    this.isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
  }

  /**
   * Unbind "scroll" event from onScroll function.
   */
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    return (
      <>
        <Splash onClickButton={i => this.setActiveTab(i)} scrollToTarget={id => this.scrollToTarget(id)} />
        <Navbar tabStates={this.state.tabStates} onClickTab={i => this.setActiveTab(i)} scrollToTarget={id => this.scrollToTarget(id)} />
        <Content />
        <Footer onClickFooter={() => this.setActiveTab(0)} scrollToHome={() => this.scrollToTarget('home')} />
        <ModalList />
      </>
    );
  }
}

// Initialize WOW, a module that allows for revealing CSS animations as you scroll down a page
var wow = new WOW.WOW(
  {
    boxClass: 'wow',      // animated element css class
    animateClass: 'animated', // animation css class
    offset: 0,          // distance to the element when triggering the animation 
    mobile: false,      // don't trigger animations on mobile devices
    live: true,       // act on asynchronously loaded content
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();