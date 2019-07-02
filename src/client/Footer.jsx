import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/footer.css';

/**
 * Footer at the bottom of the page, containing the button for returning to the top
 */
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Animate the button on mouse enter
   */
  footerEnter = () => {
    document.getElementById('footer-svg').classList.add('footer-svg-hover');
    document.getElementById('footer-path').classList.add('footer-path-hover');
  }

  /**
   * Animate the button on mouse leave
   */
  footerLeave = () => {
    document.getElementById('footer-svg').classList.remove('footer-svg-hover');
    document.getElementById('footer-path').classList.remove('footer-path-hover');
  }

  render() {
    return (
      <center style={{ backgroundColor: 'white', paddingTop: "10rem", paddingBottom: '11rem' }}>
        <svg id="footer-svg" onMouseEnter={this.footerEnter} onMouseLeave={this.footerLeave} onClick={() => { this.props.onClickFooter(); this.props.scrollToHome(); }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
          <path id="footer-path" fill="#48c08c" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          <path fill="none" d="M0 0h24v24H0V0z" />
        </svg>
      </center>
    );
  }
}

Footer.propTypes = {
  onClickFooter: PropTypes.func.isRequired,
  scrollToHome: PropTypes.func.isRequired
};