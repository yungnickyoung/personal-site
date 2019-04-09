import React, { Component } from 'react';
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
    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab(i) {
    let newTabStates = Array(4).fill(false);
    newTabStates[i] = true;
    this.setState({
      tabStates: newTabStates
    });
  }

  scrollFunc(target) {
    var targ = document.getElementById(target);
    targ.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <>
        <Splash onClickButton={i => this.handleClickTab(i)} scrollFunc={targ => this.scrollFunc(targ)}/>
        <Navbar tabStates={this.state.tabStates} onClickTab={i => this.handleClickTab(i)} scrollFunc={targ => this.scrollFunc(targ)}/>
        <Content />
      </>
    );
  }
}
