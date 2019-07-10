import React from 'react';
import ProjectCard from './ProjectCard';

import PersonalSiteCardImage from './assets/personalsite/card-personalsite.png';
import PersonalSiteImage1 from './assets/personalsite/pic1.png';

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

/**
 * List of all the cards in the Projects section
 */
export default function CardList() {
  // Disable card flip animations on Safari and Edge due to bug with displaying modals 
  let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  let isEdge = /Edge/.test(navigator.userAgent);
  var colClasses = "col-12 col-sm-6 col-lg-4 my-2 d-flex justify-content-center";
  if (!isSafari && !isEdge) {
    colClasses += " wow slideInUp";
  }
  
  return (
    <div className="container justify-content-center text-center">
      <div className="row justify-content-center text-center">
        <div className={colClasses} data-wow-delay="1s">
          <div className="wow fadeIn" data-wow-delay="1.2s">
            <ProjectCard
              image={PersonalSiteCardImage}
              alt="Personal Website"
              cardTitle="Personal Website"
              modalID="personalsite"
              modalImages={[PersonalSiteImage1]}
              tools={['Bootstrap', 'React.js', 'SASS', 'Node.js', 'Express', 'AWS']}
              cardDesc="Personal portfolio website built with React.js + Bootstrap on the frontend and Node.js + Express on the backend."
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/personal-site"]}
            />
          </div>
        </div>
        <div className={colClasses} data-wow-delay="1.1s">
          <div className="wow fadeIn" data-wow-delay="1.3s">
            <ProjectCard
              image={JistCardImage}
              alt="JIST!"
              cardTitle="JIST!"
              modalID="jist"
              modalImages={[JistModalImage1, JistModalImage2]}
              tools={['Python', 'Java', 'Flask', 'Android', 'MySQL', 'Docker', 'GCP', 'K8s']}
              cardDesc="Android app that uses Natural Language Processing algorithms to automatically create summaries of news articles from various news sources. Supports 14+ top news sources from which the user can customize viewing preferences. In development."
              buttonTitles={[]}
              buttonUrls={[]}
            />
          </div>
        </div>
        <div className={colClasses} data-wow-delay="1.2s">
          <div className="wow fadeIn" data-wow-delay="1.4s">
            <ProjectCard
              image={SmashStatsCardImage}
              alt="SmashStats"
              cardTitle="SmashStats Twitch Extension"
              modalID="smashstats"
              modalImages={[SmashStatsModalImage1, SmashStatsModalImage2, SmashStatsModalImage3]}
              tools={['jQuery', 'CSS', 'Flask', 'AWS']}
              cardDesc="Twitch Extension that provides data for player matchups during Super Smash Bros. Melee tournament streams. Utilizes JWTs with a Twitch-provided shared secret to authenticate communication with Twitch's PubSub service. Currently live on the Twitch Extension Marketplace!"
              buttonTitles={["GitHub Repo", "View on Twitch"]}
              buttonUrls={["https://github.com/yungnickyoung/SmashStats-Melee-Twitch-Extension", "https://www.twitch.tv/ext/807s6vsk4gkel6rx8zk7ys8jome5sj-0.0.1"]}
            />
          </div>
        </div>
        <div className={colClasses} data-wow-delay="1.3s">
          <div className="wow fadeIn" data-wow-delay="1.5s">
            <ProjectCard
              image={VerCareCardImage}
              alt="VerCare"
              cardTitle="VerCare"
              modalID="vercare"
              modalImages={[VerCareModalImage1, VerCareModalImage2, VerCareModalImage3]}
              tools={['Bootstrap', 'jQuery', 'CSS', 'Flask', 'SQLite']}
              cardDesc="Aggregates and compares medical procedure prices for nearby hospitals in order to help you find the perfect price. SwampHacks 2019 3rd place winner! In development."
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/VerCare"]}
            />
          </div>
        </div>
        <div className={colClasses} data-wow-delay="1.4s">
          <div className="wow fadeIn" data-wow-delay="1.6s">
            <ProjectCard
              image={LookingGlassCardImage}
              alt="LookinGlass [WIP]"
              cardTitle="LookinGlass"
              modalID="lookingglass"
              modalImages={[LookingGlassModalImage1]}
              tools={['Java', 'JNA', 'C++']}
              cardDesc="Windows 10 window management software that allows users to control windows in pre-set or custom-made arrangements and patterns with user-defined hotkeys. Uses Java Native Access (JNA) to invoke native code for handling keyboard event listening and window size &amp; position management. In development."
              buttonTitles={["GitHub Repo"]}
              buttonUrls={["https://github.com/yungnickyoung/LookinGlass"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
