import React, { Component } from 'react';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

/**
 * Website content. Includes Projects, Experience, and Contact sections.
 */
export default class Content extends Component {
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Projects />
        <Experience />
        <Contact />
      </div>
    );
  }
}
