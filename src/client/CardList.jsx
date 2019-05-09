import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import PersonalSiteCardImage from './assets/personalsite/card-personalsite.png';

import JistCardImage from './assets/jist/card-jist.png';
import JistModalImage1 from './assets/jist/pic1.png';
import JistModalImage2 from './assets/jist/pic2.png';

import SmashStatsCardImage from './assets/smashstats/card-smashstats.png';
import SmashStatsModalImage1 from './assets/smashstats/pic2.png';
import SmashStatsModalImage2 from './assets/smashstats/pic1.png';
import SmashStatsModalImage3 from './assets/smashstats/pic3.png';

import VerCareCardImage from './assets/vercare/card-vercare.png';
import VerCareModalImage1 from './assets/vercare/pic1.png';
import VerCareModalImage2 from './assets/vercare/pic2.png';
import VerCareModalImage3 from './assets/vercare/pic3.png';

import LookingGlassCardImage from './assets/lookingglass/card-lookingglass.png';
import LookingGlassModalImage1 from './assets/lookingglass/pic1.png';

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image={PersonalSiteCardImage}
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
              image={JistCardImage}
              alt="JIST!"
              cardTitle="JIST! [WIP]"
              modalID="jist"
              modalImages={[JistModalImage1, JistModalImage2]}
              tools={['React Native', 'Flask', 'JavaScript', 'MySQL', 'Docker', 'GCP', 'Kubernetes']}
              cardDesc="Mobile app that uses Natural Language Processing algorithms to automatically create summaries of news articles from various news sources. Supports 14+ top news sources from which the user can customize viewing preferences. In development."
              buttonTitles={[]}
              buttonUrls={[]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image={SmashStatsCardImage}
              alt="SmashStats"
              cardTitle="SmashStats Twitch Extension"
              modalID="smashstats"
              modalImages={[SmashStatsModalImage1,SmashStatsModalImage2, SmashStatsModalImage3]}
              tools={['jQuery', 'CSS', 'Flask', 'AWS']}
              cardDesc="Twitch Extension that provides data for player matchups during Super Smash Bros. Melee tournament streams. Utilizes JWTs with a Twitch-provided shared secret to authenticate communication with Twitch's PubSub service. Currently live on the Twitch Extension Marketplace!"
              buttonTitles={["GitHub Repo", "View on Twitch"]}
              buttonUrls={["https://github.com/yungnickyoung/SmashStats-Melee-Twitch-Extension", "https://www.twitch.tv/ext/807s6vsk4gkel6rx8zk7ys8jome5sj-0.0.1"]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image={VerCareCardImage}
              alt="VerCare [WIP]"
              cardTitle="VerCare"
              modalID="vercare"
              modalImages={[VerCareModalImage1, VerCareModalImage2, VerCareModalImage3]}
              tools={['Bootstrap', 'jQuery', 'CSS', 'Flask', 'SQLite']}
              cardDesc="Aggregates and compares medical procedure prices for nearby hospitals in order to help you find the perfect price. SwampHacks 2019 3rd place winner!"
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/VerCare"]}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-2">
            <ProjectCard
              image={LookingGlassCardImage}
              alt="Looking Glass [WIP]"
              cardTitle="Looking Glass"
              modalID="lookingglass"
              modalImages={[LookingGlassModalImage1]}
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
