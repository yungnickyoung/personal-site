import React from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';

export default function Projects(props) {
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident|Edge/.test(ua);
  var sectionStyle = {
    position: 'relative',
    left: '0',
    top: '-66px'
  };

  if (isIE) {
    sectionStyle.top = '0'; // Otherwise the section marker cannot be scrolled to in IE/Edge
  }
  
  return (
    <div className="pb-5" style={{ backgroundColor: 'white' }}>
      <div id="projects" style={sectionStyle}></div>

      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleProjects" text="PORTFOLIO" />
        </div>
      </div>
      <div className="text-center justify-content-center d-block mb-3 mx-2">Mouse over or tap on a project to learn more.</div>
      <div className="row">
        <div className="col">
          <CardList />
        </div>
      </div>
    </div>
  );
}