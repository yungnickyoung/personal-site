import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ReactImage from './assets/react.png';

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image="./src/client/assets/personalsite/card-personalsite.png"
              alt="Personal Website"
              cardTitle="Personal Website"
              modalID="personalsite"
              modalImages={[]}
              tools={['Bootstrap', 'React.js', 'vis.js','Node', 'Express', 'AWS']}
              cardDesc="Personal portfolio website built with React.js + Bootstrap on the frontend and Node.js + Express on the backend."
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/personal-site"]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image="./src/client/assets/jist/card-jist.png"
              alt="JIST!"
              cardTitle="JIST! [WIP]"
              modalID="jist"
              modalImages={["./src/client/assets/jist/pic1.png", "./src/client/assets/jist/pic2.png"]}
              tools={['React Native', 'Flask', 'JavaScript', 'MySQL', 'Docker', 'GCP', 'Kubernetes']}
              cardDesc="Mobile app that uses Natural Language Processing algorithms to automatically create summaries of news articles from various news sources. Supports 14+ top news sources from which the user can customize viewing preferences. In development."
              buttonTitles={[]}
              buttonUrls={[]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image="./src/client/assets/smashstats/card-smashstats.png"
              alt="SmashStats"
              cardTitle="SmashStats Twitch Extension"
              modalID="smashstats"
              modalImages={["./src/client/assets/smashstats/pic2.png", "./src/client/assets/smashstats/pic1.png", "./src/client/assets/smashstats/pic3.png"]}
              tools={['jQuery', 'CSS', 'Flask', 'AWS']}
              cardDesc="Twitch Extension that provides data for player matchups during Super Smash Bros. Melee tournament streams. Utilizes JWTs with a Twitch-provided shared secret to authenticate communication with Twitch's PubSub service. Currently live on the Twitch Extension Marketplace!"
              buttonTitles={["GitHub Repo", "View on Twitch"]}
              buttonUrls={["https://github.com/yungnickyoung/SmashStats-Melee-Twitch-Extension", "https://www.twitch.tv/ext/807s6vsk4gkel6rx8zk7ys8jome5sj-0.0.1"]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image="./src/client/assets/vercare/card-vercare.png"
              alt="VerCare [WIP]"
              cardTitle="VerCare"
              modalID="vercare"
              modalImages={["./src/client/assets/vercare/pic1.png", "./src/client/assets/vercare/pic2.png", "./src/client/assets/vercare/pic3.png",]}
              tools={['Bootstrap', 'jQuery', 'CSS', 'Flask', 'SQLite']}
              cardDesc="Aggregates and compares medical procedure prices for nearby hospitals in order to help you find the perfect price. SwampHacks 2019 3rd place winner!"
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/VerCare"]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image="./src/client/assets/lookingglass/card-lookingglass.png"
              alt="Looking Glass [WIP]"
              cardTitle="Looking Glass"
              modalID="lookingglass"
              modalImages={["./src/client/assets/lookingglass/pic1.png"]}
              tools={['Java', 'C++']}
              cardDesc="Windows 10 window management software that allows users to control windows in pre-set or custom-made arrangements and patterns with user-defined hotkeys."
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/Looking-Glass"]}
            />
          </div>
        </div>
      </div>
    );
  }
}
