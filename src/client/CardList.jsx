import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ReactImage from './react.png';

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <ProjectCard image={ReactImage} alt="Personal Website" cardTitle="Personal Website" cardDesc="Personal portfolio website built with React.js + Bootstrap on the frontend and Node.js + Express on the backend." projectUrl="https://github.com/yungnickyoung/personal-site" />
          </div>
          <div className="col-6 col-md-4">
            <ProjectCard image={ReactImage} alt="JIST!" cardTitle="JIST!" cardDesc="Mobile app that uses NLP TextRank algorithm to create summaries of news articles from various news sources. Powered by React Native with Flask." projectUrl="#" />
          </div>
          <div className="col-6 col-md-4">
            <ProjectCard image={ReactImage} alt="SmashStats" cardTitle="SmashStats Twitch Extension" cardDesc="Twitch extension that provides data for player matchups during Super Smash Bros. Melee tournament streams. JQuery, CSS frontend + Flask backend hosted on AWS." projectUrl="https://github.com/yungnickyoung/SmashStats-Melee-Twitch-Extension" />
          </div>
        </div>
      </div>
    );
  }
}
