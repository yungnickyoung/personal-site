import React from 'react';
import SectionTitle from './SectionTitle';
import './css/experience.css';

import UltimateSoftwareExperienceImage from './assets/experience/ultimatesoftware.jpg';
import UFExperienceImage from './assets/experience/uf.jpg';

/**
 * Experience section
 */
export default function Experience(props) {
  return (
    <div className="pb-5">
      <div id="experience" style={{ position: 'relative', top: '-66px', left: '0' }}></div>
      <div className="row justify-content-center">
        <div className="col justify-content-center text-center">
          <SectionTitle id="sectionTitleExperience" text="EXPERIENCE" />
        </div>
      </div>
      <div className="wow fadeIn" data-wow-delay="1.2s">
        <div className="text-center justify-content-center d-block mx-2 mx-sm-4 mb-5 wow fadeInLeft" data-wow-delay=".7s">
          The following is my professional experience.
          <br />
          For more information, check out <strong><a href="https://www.linkedin.com/in/yungnickyoung/" target="_blank">my LinkedIn</a></strong>.
        </div>
      </div>
      <div className="row justify-content-md-center text-center mx-0 mx-md-3 mx-lg-5 pb-md-5">
        <div className="col-12 col-md-4 col-lg mb-3 mb-lg-0 text-md-right">
          <div className="wow fadeIn" data-wow-delay="1.1s">
            <img className="experience-image wow fadeInRight" data-wow-delay=".7s" src={UltimateSoftwareExperienceImage} alt="Ultimate Software" />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6 pb-5 pb-md-0 text-center text-md-left">
          <div className="wow fadeIn" data-wow-delay="1.3s">
            <div className="wow fadeInRight" data-wow-delay=".9s" data-wow-duration="1s">
              <div className="experience-title">Ultimate Software</div>
              <div className="experience-subtitle mx-md-1">TECHSTAR INTERN - IDENTITY TEAM</div>
            </div>
          </div>
          <div className="experience-content px-sm-5 px-md-4">
            <ul className="experience-list text-left">
              <li className="wow fadeIn" data-wow-delay="1.4s"><div className="dot"></div><span>Developed multiple <span className="highlight">Chef</span> recipes in <span className="highlight">Ruby</span> to enhance CI/CD workflow.</span></li>
              <li className="wow fadeIn" data-wow-delay="1.5s"><div className="dot"></div><span>Implemented <span className="highlight">Sensu</span> checks in <span className="highlight">Ruby</span> to monitor blue-green production deployments.</span></li>
              <li className="wow fadeIn" data-wow-delay="1.6s"><div className="dot"></div><span>Wrote <span className="highlight">HAProxy</span> and <span className="highlight">keepalived</span> scripts to detect load balancer failures and activate backups accordingly, ensuring high availability in production.</span></li>
              <li className="wow fadeIn" data-wow-delay="1.7s"><div className="dot"></div><span>Learned and utilized <span className="highlight">OAuth 2.0</span> protocol concepts.</span></li>
            </ul>
          </div>
        </div>
        <div className="col-md-1 col-lg-2"></div>
      </div>
      <div className="row justify-content-md-center text-center mx-0 mx-md-3 mx-lg-5 pb-md-5">
        <div className="col-12 col-md-4 col-lg mb-3 mb-lg-0 text-md-right">
          <div className="wow fadeIn" data-wow-delay="1.4s">
            <img className="experience-image wow fadeInRight" data-wow-delay="1.0s" src={UFExperienceImage} alt="UF GatorSense - Machine Learning and Sensing Lab" />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6 pb-5 pb-md-0 text-center text-md-left">
          <div className="wow fadeIn" data-wow-delay="1.6s">
            <div className="wow fadeInRight" data-wow-delay="1.2s">
              <div className="experience-title">UF Machine Learning &amp; Sensing Lab</div>
              <div className="experience-subtitle mx-md-1">UNDERGRADUATE RESEARCHER</div>
            </div>
          </div>
          <div className="experience-content px-sm-5 px-md-4">
            <ul className="experience-list text-left">
              <li className="wow fadeIn" data-wow-delay="1.7s"><div className="dot"></div><span>Partnered with the US Office of Naval Research to automate detection of sea mines.</span></li>
              <li className="wow fadeIn" data-wow-delay="1.8s"><div className="dot"></div><span>Applied complex <span className="highlight">Machine Learning</span> fuzzy clustering algorithms in <span className="highlight">MATLAB</span> to automate classification of high-dimensionality feature vectors.</span></li>
              <li className="wow fadeIn" data-wow-delay="1.9s"><div className="dot"></div><span>Co-authored <strong><a href="https://arxiv.org/abs/1709.10180v1" target="_blank">research paper on novel fuzzy clustering algorithm</a></strong>, presented at the IEEE Symposium Series on Computational Intelligence conference in 2017</span></li>
            </ul>
          </div>
        </div>
        <div className="col-md-1 col-lg-2"></div>
      </div>
    </div>
  );
}