import React, { Component } from 'react';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import SkillsGraph from './SkillsGraph';
import SectionTitle from './SectionTitle';

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
  //   let fadeInElems = [
  //     document.getElementById("sectionTitleProjects"),
  //     document.getElementById("sectionTitleExperience"),
  //     document.getElementById("sectionTitleContact")    
  //   ];

  //   let flipInXElems = [
  //     document.getElementById("card1"),
  //     document.getElementById("card2")
  //   ];

  //   console.log(fadeInElems);
  //   console.log(flipInXElems);

  //   // for (var e of fadeInElems) {
  //   //   if (this.isInViewport(e)) {
  //   //     e.classList.add('animated');
  //   //     e.classList.add('fadeIn');
  //   //   }
  //   // }

  //   for (var e of flipInXElems) {
  //     if (this.isInViewport(e)) {
  //       e.classList.add('animated');
  //       e.classList.add('flipInX');      }
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.onScroll, false);
  // }

  render() {
    return (
      <>
        <Projects />
        <Experience />
        <Contact />
      </>
    );
  }
}
