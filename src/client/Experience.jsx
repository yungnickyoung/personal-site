import React from 'react';
import SectionTitle from './SectionTitle';
import './css/experience.css';

import UltimateSoftwareExperienceImage from './assets/experience/ultimatesoftware.jpg';
import UFExperienceImage from './assets/experience/uf.jpg';

export default function Experience(props) {
  return (
    <div className="pb-5">
      <div id="experience" style={{ position: 'relative', top: '-66px', left: '0' }}></div>
      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleExperience" text="EXPERIENCE" />
        </div>
      </div>
      <div className="text-center justify-content-center d-block mx-2 mx-sm-4 mb-5 wow fadeIn" data-wow-delay=".7s">The following is my professional experience. <br />For more information, check out <strong><a href="https://www.linkedin.com/in/yungnickyoung/" target="_blank">my LinkedIn</a></strong>.</div>
      <div className="row justify-content-md-center mx-0 mx-md-3 mx-lg-5 mb-md-5">
        <div className="col-12 col-md-4 col-lg mb-3 mb-lg-0 text-center text-md-right">
          <img className="experience-image wow fadeInRightBig" data-wow-delay="1s" src={UltimateSoftwareExperienceImage} alt="Ultimate Software" />
        </div>
        <div className="col-12 col-md-8 mb-5 text-center text-md-left">
          <div className="wow fadeInRight" data-wow-delay="1.3s">
            <div className="experience-title">Ultimate Software</div>
            <div className="experience-subtitle mx-md-1">TECHSTAR INTERN - IDENTITY TEAM</div>
          </div>
          <div className="experience-content px-sm-5 px-md-4">
            <ul className="experience-list text-left">
              <li className="wow fadeIn" data-wow-delay="1.7s"><div className="dot"></div><span>Routed traffic with HAProxy</span></li>
              <li className="wow fadeIn" data-wow-delay="1.9s"><div className="dot"></div><span>Created Sensu checks in Ruby to monitor blue-green deployment environments</span></li>
              <li className="wow fadeIn" data-wow-delay="2.1s"><div className="dot"></div><span>Developed Chef recipes to support CI/CD workflow</span></li>
              <li className="wow fadeIn" data-wow-delay="2.3s"><div className="dot"></div><span>Performed extensive code review with employees via BitBucket</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-left mx-0 mx-md-3 mx-lg-5">
        <div className="col-12 col-md-4 col-lg mb-3 mb-lg-0 text-center text-md-right">
          <img className="experience-image wow fadeInRightBig" data-wow-delay="1.7s" src={UFExperienceImage} alt="UF GatorSense - Machine Learning and Sensing Lab" />
        </div>
        <div className="col-12 col-md-8 mb-5 text-center text-md-left">
          <div className="wow fadeInRight" data-wow-delay="2.0s">
            <div className="experience-title">UF Machine Learning &amp; Sensing Lab</div>
            <div className="experience-subtitle mx-md-1">UNDERGRADUATE RESEARCHER</div>
          </div>
          <div className="experience-content px-sm-5 px-md-4">
            <ul className="experience-list text-left">
              <li className="wow fadeIn" data-wow-delay="2.4s"><div className="dot"></div><span>Partnered with the US Office of Naval Research for automating detection of sea mines</span></li>
              <li className="wow fadeIn" data-wow-delay="2.6s"><div className="dot"></div><span>Analyzed high-dimensionality feature vectors of sonar images of the ocean floor using MATLAB</span></li>
              <li className="wow fadeIn" data-wow-delay="2.8s"><div className="dot"></div><span>Applied complex Machine Learning fuzzy clustering algorithms to automate classification of different segments of ocean floor</span></li>
              <li className="wow fadeIn" data-wow-delay="3s"><div className="dot"></div><span>Co-authored <strong><a href="https://arxiv.org/abs/1709.10180v1" target="_blank">research paper on new fuzzy clustering algorithm</a></strong>, presented at the IEEE Symposium Series on Computational Intelligence conference in 2017</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}