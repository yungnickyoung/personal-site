import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/app.css'
import Navbar from './Navbar'
import Content from './Content'
import Splash from './Splash'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStates: Array(4).fill(false)
    };
  }

  setActiveTab = (i) => {
    let newTabStates = Array(4).fill(false);
    newTabStates[i] = true;
    this.setState({
      tabStates: newTabStates
    });
  }

  scrollToTarget = (target) => {
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  onScroll = () => {
    var projectsDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("projects")).getBoundingClientRect().y);
    var experienceDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("experience")).getBoundingClientRect().y);
    var contactDist = Math.abs(ReactDOM.findDOMNode(document.getElementById("contact")).getBoundingClientRect().y);

    if (projectsDist < 20) {
      this.setActiveTab(0);
    } else if (experienceDist < 20) {
      this.setActiveTab(2);
    } else if (contactDist < 20) {
      this.setActiveTab(3);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    return (
      <>
        <Splash onClickButton={i => this.setActiveTab(i)} scrollFunc={targ => this.scrollToTarget(targ)} />
        <Navbar tabStates={this.state.tabStates} onClickTab={i => this.setActiveTab(i)} scrollFunc={targ => this.scrollToTarget(targ)} />
        <Content />
      </>
    );
  }
}
