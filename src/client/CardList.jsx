import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ReactImage from './react.png';
import PersonalSiteImage from './card-personal-site.png';
import SmashstatsImage from './card-smashstats.png';
import VercareImage from './card-vercare.png';

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard image={PersonalSiteImage} alt="Personal Website" cardTitle="Personal Website" tools={['Bootstrap', 'React', 'Node', 'Express', 'AWS']} cardDesc="Personal portfolio website built with React.js + Bootstrap on the frontend and Node.js + Express on the backend." projectUrl="https://github.com/yungnickyoung/personal-site" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard image={ReactImage} alt="JIST!" cardTitle="JIST! [WIP]" tools={['React Native', 'Flask', 'JavaScript']} cardDesc="Mobile app that uses NLP TextRank algorithm to create summaries of news articles from various news sources. Powered by React Native with Flask." projectUrl="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard image={SmashstatsImage} alt="SmashStats" cardTitle="SmashStats Twitch Extension" tools={['JQuery', 'CSS', 'Flask', 'AWS']} cardDesc="Twitch extension that provides data for player matchups during Super Smash Bros. Melee tournament streams. JQuery + CSS frontend and Flask backend hosted on AWS." projectUrl="https://github.com/yungnickyoung/SmashStats-Melee-Twitch-Extension" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard image={VercareImage} alt="VerCare [WIP]" cardTitle="VerCare" tools={['JQuery', 'CSS', 'Flask', 'SQLite']} cardDesc="Website for aggregating hard-to-find hospital data near you. Built with Jquery, CSS, and Flask." projectUrl="" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard image={PersonalSiteImage} alt="Looking Glass [WIP]" cardTitle="Looking Glass" tools={['Java', 'C++']} cardDesc="Windows 10 window management software allowing users to control windows with hotkeys. Java and C++." projectUrl="https://github.com/yungnickyoung/Looking-Glass" />
          </div>
        </div>
      </div>
    );
  }
}
