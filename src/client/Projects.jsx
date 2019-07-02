import React from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';

/**
 * Projects section
 */
export default function Projects(props) {
  // Determine if user agent is Internet Explorer or Edge
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident|Edge/.test(ua);

  var sectionStyle = {
    position: 'relative',
    left: '0',
    top: '-66px'
  };

  // Set offset for scroll anchors to 0 if UA is IE or Edge
  if (isIE) {
    sectionStyle.top = '0';
  }

  return (
    <div className="pb-5" style={{ backgroundColor: 'white' }}>
      <div id="projects" style={sectionStyle}></div>

      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleProjects" text="PORTFOLIO" />
        </div>
      </div>
      <div className="text-center justify-content-center d-block mb-3 mx-2 wow fadeIn" data-wow-delay=".7s">Mouse over or tap on a project to learn more.</div>
      <div className="row">
        <div className="col">
          <CardList />
        </div>
      </div>
    </div>
  );
}