import React, { Component } from 'react';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import SkillsGraph from './SkillsGraph';
import SectionTitle from './SectionTitle';
import './css/animation.css';

export default class Content extends Component {
  // COMMENTED OUT CODE : USED FOR ANIMATIONS
  // Returns true if elem is in viewport
  // isInViewport = (elem) => {
  //   var bounding = elem.getBoundingClientRect();
  //   return (
  //       bounding.top >= 0 &&
  //       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  //   );
  // }

  // onScroll = () => {
  //   let elems = [
  //     document.getElementById("sectionTitleProjects"),
  //     document.getElementById("sectionTitleExperience"),
  //     document.getElementById("sectionTitleContact")    
  //   ];

  //   console.log(elems);

  //   for (var e of elems) {
  //     if (this.isInViewport(e)) {
  //       e.classList.add('animated');
  //       e.classList.add('slide-left');
  //     }
  //   }
  // }

  render() {
    return (
      <>
      {/* <div className="container" style={{ backgroundColor: 'white', position: 'relative' }}> */}
        <Projects />

        {/* THE FOLLOWING IS FOR THE SKILLS SECTION */}
        {/* <div id="skills" style={{position: 'relative', top: '-66px', left: '0'}}></div>
        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle text="My Skills" />
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center text-center">
            <SkillsGraph />
          </div>
        </div> */}

        <Experience />
        <Contact />
      {/* </div> */}
      </>
    );
  }
}
