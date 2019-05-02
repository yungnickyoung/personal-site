import React, { Component } from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';
import SkillsGraph from './SkillsGraph';

export default class Content extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: 'white', position: 'relative' }}> 
        <div id="projects" style={{position: 'absolute', top: '-66px', left: '0'}}></div>

        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle text="My Projects" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CardList />
          </div>
        </div>

        <div id="skills" style={{position: 'relative', top: '-66px', left: '0'}}></div>
        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle text="My Skills" />
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center text-center">
            <SkillsGraph />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{paddingBottom: "3.7rem", display: "flex"}}></div>
      </div>
    );
  }
}
