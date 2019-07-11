import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = require("./data/projects.json").projects;

/**
 * List of all the cards in the Projects section
 */
export default function CardList() {
  // Disable card flip animations on Safari and Edge due to bug with displaying modals 
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isEdge = /Edge/.test(navigator.userAgent);
  const isIE = /*@cc_on!@*/false || !!document.documentMode;

  let colClasses = "col-12 col-sm-6 col-lg-4 my-2 d-flex justify-content-center";

  if (!(isSafari || isEdge || isIE)) {
    colClasses += " wow slideInUp";
  }

  return (
    <div className="container justify-content-center text-center">
      <div className="row justify-content-center text-center">
        {
          projectData.map((project, i) =>
            <div className={colClasses} data-wow-delay={(1 + i * .1) + "s"}>
              <div className="wow fadeIn" data-wow-delay={(1.2 + i * .1) + "s"}>
                <ProjectCard 
                  image={project.image}
                  alt={project.alt}
                  cardTitle={project.cardTitle}
                  cardDesc={project.cardDesc}
                  tools={project.tools}
                  modalID={project.modalID}
                  key={i}
                />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
