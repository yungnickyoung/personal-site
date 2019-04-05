import React, { Component } from 'react';
import Card from './Card';
import ReactImage from './react.png';

export default class CardList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <Card image={ReactImage} alt="Alt" cardTitle="Personal Website" cardDesc="yo" projectUrl="#" />
          </div>
          <div className="col-6 col-md-4">
            <Card image={ReactImage} alt="Alt" cardTitle="JIST!" cardDesc="yah" projectUrl="#" />
          </div>
          <div className="col-6 col-md-4">
            <Card image={ReactImage} alt="Alt" cardTitle="SmashStats Twitch Extension" cardDesc="yeet" projectUrl="#" />
          </div>
        </div>
      </div>
    );
  }
}
