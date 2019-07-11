import React from 'react';
import ProjectModal from './ProjectModal';

const projectData = require("./data/projects.json").projects;

export default function ModalList(props) {
  return (
    <>
      {
        projectData.map((project, i) =>
          <ProjectModal
            id={project.modalID}
            title={project.cardTitle}
            images={project.modalImages}
            alt={project.alt}
            desc={project.cardDesc}
            buttonTitles={project.buttonTitles}
            buttonUrls={project.buttonUrls}
            key={i}
          />
        )
      }
    </>
  );
}