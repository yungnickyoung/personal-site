import React, { Component } from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';
import SkillsGraph from './SkillsGraph';
import $ from 'jquery'
import './css/experience.css'

export default class Content extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    var data = new FormData(event.target);
    console.log(event.target);
    console.log(data);

    console.log(JSON.stringify($('#contact-form').serializeArray()));

    fetch('/submit', {
      method: 'POST',
      mode: 'cors',
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($('#contact-form').serializeArray()),
    }).then((res) => {
      return res.json()

      // TODO - MAKE SOMETHING APPEAR TO USER SAYING THE MESSAGE WAS SENT, THEN CLEARS FORM CONTENTS (MAYBE SCROLLS USER TO SPLASH SCREEN AS WELL)

    }).then((body) => {
      console.log(body);
    });

  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: 'white', position: 'relative' }}>
        <div id="projects" style={{ position: 'absolute', top: '-66px', left: '0' }}></div>

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

        {/* <div id="skills" style={{position: 'relative', top: '-66px', left: '0'}}></div>
        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle text="My Skills" />
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center text-center">
            <SkillsGraph />
          </div>
        </div> */}

        <div id="experience" style={{ position: 'relative', top: '-66px', left: '0' }}></div>
        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle text="My Experience" />
          </div>
        </div>
        <div className="row justify-content-lg-left mx-0 mx-lg-4 mb-lg-5">
          <div className="col-12 col-lg mb-3 mb-lg-0 text-center text-lg-left">
            <img className="experience-image" src="./src/client/assets/experience/ultimatesoftware.jpg" alt="Ultimate Software" />
          </div>
          <div className="col-12 col-lg-9 mb-5 text-center text-lg-left">
            <div className="experience-title">Ultimate Software</div>
            <div className="experience-subtitle mx-md-1">TECHSTAR INTERN - IDENTITY TEAM</div>
            <div className="experience-content mx-md-4">My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre </div>
          </div>
        </div>
        <div className="row justify-content-lg-left mx-0 mx-lg-4">
          <div className="col-12 col-lg mb-2 text-center text-lg-left">
            <img className="experience-image" src="./src/client/assets/experience/uf.jpg" alt="UF GatorSense - Machine Learning and Sensing Lab" />
          </div>
          <div className="col-12 col-lg-9 mb-2 text-center text-lg-left">
            <div className="experience-title">
              UF Machine Learning &amp; Sensing Lab</div>
            <div className="experience-subtitle mx-md-1">UNDERGRADUATE RESEARCHER</div>
            <div className="experience-content mx-md-4">My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre </div>
          </div>
        </div>


        <div id="contact" style={{ position: 'relative', top: '-66px', left: '0' }}></div>
        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle text="Contact Me" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 md-auto justify-content-center text-center">
            <form id="contact-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" id="nameInput" name="senderName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="emailInput" name="senderEmail" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea type="text" className="form-control" id="textInput" name="senderMessage" placeholder="Message" />
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
              <small id="submitHelp" className="form-text text-muted">Your secrets are safe with me.</small>
            </form>
          </div>
        </div>
        <div style={{ paddingBottom: "26rem", display: "flex" }}></div>
      </div>
    );
  }
}
