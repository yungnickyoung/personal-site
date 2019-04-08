import React, { Component } from 'react';
import Card from './Card';
import ReactImage from './react.png';

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <Card image={ReactImage} alt="Alt" cardTitle="Personal Website" cardDesc="Personal portfolio website built with React.js + Bootstrap on the frontend and Node.js + Express on the backend." projectUrl="#" />
          </div>
          <div className="col-6 col-md-4">
            <Card image={ReactImage} alt="Alt" cardTitle="JIST!" cardDesc="Mobile app that uses NLP TextRank algorithm to create summaries of news articles from various news sources. Powered by React Native with Flask." projectUrl="#" />
          </div>
          <div className="col-6 col-md-4">
            <Card image={ReactImage} alt="Alt" cardTitle="SmashStats Twitch Extension" cardDesc="Twitch extension that provides data for player matchups during Super Smash Bros. Melee tournament streams. JQuery, CSS frontend + Flask backend hosted on AWS." projectUrl="#" />
          </div>
        </div>
      </div>
    );
  }
}
