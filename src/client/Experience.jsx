import React from 'react';
import SectionTitle from './SectionTitle';
import './css/experience.css';

import UltimateSoftwareExperienceImage from './assets/experience/ultimatesoftware.jpg';
import UFExperienceImage from './assets/experience/uf.jpg';

export default function Experience(props) {
  return (
    <>
      <div id="experience" style={{ position: 'relative', top: '-66px', left: '0' }}></div>
      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleExperience" text="My Experience" />
        </div>
      </div>
      <div className="justify-content-center text-center mb-5">The following is my professional experience. For more information, check out <strong><a href="https://www.linkedin.com/in/yungnickyoung/" target="_blank">my LinkedIn</a></strong>.</div>
      <div className="row justify-content-lg-left mx-0 mx-lg-4 mb-lg-5">
        <div className="col-12 col-lg mb-3 mb-lg-0 text-center text-lg-left">
          <img className="experience-image" src={UltimateSoftwareExperienceImage} alt="Ultimate Software" />
        </div>
        <div className="col-12 col-lg-9 mb-5 text-center text-lg-left">
          <div className="experience-title">Ultimate Software</div>
          <div className="experience-subtitle mx-md-1">TECHSTAR INTERN - IDENTITY TEAM</div>
          <div className="experience-content mx-md-4">
            <ul className="experience-list text-left">
              <li><span>Routed traffic with HAProxy</span></li>
              <li><span>Created Sensu checks in Ruby to monitor blue-green deployment environments</span></li>
              <li><span>Developed Chef recipes to support CI/CD workflow</span></li>
              <li><span>Performed extensive code review with employees via BitBucket</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-lg-left mx-0 mx-lg-4">
        <div className="col-12 col-lg mb-2 text-center text-lg-left">
          <img className="experience-image" src={UFExperienceImage} alt="UF GatorSense - Machine Learning and Sensing Lab" />
        </div>
        <div className="col-12 col-lg-9 mb-2 text-center text-lg-left">
          <div className="experience-title">
            UF Machine Learning &amp; Sensing Lab</div>
          <div className="experience-subtitle mx-md-1">UNDERGRADUATE RESEARCHER</div>
          <div className="experience-content mx-md-4">
            <ul className="experience-list text-left">
              <li><span>Partnered with the US Office of Naval Research for automating detection of sea mines</span></li>
              <li><span>Analyzed high-dimensionality feature vectors of sonar images of the ocean floor using MATLAB</span></li>
              <li><span>Applied complex Machine Learning fuzzy clustering algorithms to automate classification of different segments of ocean floor</span></li>
              <li><span>Co-authored <strong><a href="https://arxiv.org/abs/1709.10180v1" target="_blank">research paper on new fuzzy clustering algorithm</a></strong>, presented at the IEEE Symposium Series on Computational Intelligence conference in 2017</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}