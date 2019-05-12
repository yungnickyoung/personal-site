import React from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';

export default function Projects(props) {
  return (
    <>
      <div id="projects" style={{ position: 'absolute', top: '-66px', left: '0' }}></div>

      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleProjects" text="PORTFOLIO" />
        </div>
      </div>
      <div className="text-center justify-content-center d-block mb-3">Mouse over or tap on a project to learn more.</div>
      <div className="row">
        <div className="col">
          <CardList />
        </div>
      </div>
    </>
  );
}