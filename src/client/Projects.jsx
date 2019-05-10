import React from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';

export default function Projects(props) {
  return (
    <>
      <div id="projects" style={{ position: 'absolute', top: '-66px', left: '0' }}></div>

      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleProjects" text="My Projects" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CardList />
        </div>
      </div>
    </>
  );
}