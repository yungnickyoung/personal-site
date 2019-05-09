import React, { Component } from 'react';
import CardList from './CardList';
import SectionTitle from './SectionTitle';
import SkillsGraph from './SkillsGraph';
import $ from 'jquery';
import './css/experience.css';
import './css/animation.css';

import UltimateSoftwareExperienceImage from './assets/experience/ultimatesoftware.jpg';
import UFExperienceImage from './assets/experience/uf.jpg';

export default class Content extends Component {
  // Returns true if elem is in viewport
  // isInViewport = (elem) => {
  //   var bounding = elem.getBoundingClientRect();
  //   return (
  //       bounding.top >= 0 &&
  //       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  //   );
  // }

  // onScroll = () => {
  //   let elems = [
  //     document.getElementById("sectionTitleProjects"),
  //     document.getElementById("sectionTitleExperience"),
  //     document.getElementById("sectionTitleContact")    
  //   ];

  //   console.log(elems);

  //   for (var e of elems) {
  //     if (this.isInViewport(e)) {
  //       e.classList.add('animated');
  //       e.classList.add('slide-left');
  //     }
  //   }
  // }

  // Contact form submission validation
  handleSubmit = (event) => {
    event.preventDefault();

    var form = document.getElementsByClassName('needs-validation')[0];
    form.classList.add('was-validated');
    if (form.checkValidity() === false) {
      return;
    }

    var data = new FormData(event.target);

    fetch('/submit', {
      method: 'POST',
      mode: 'cors',
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($('#contact-form').serializeArray()),
    }).then((res) => {
      if (res.ok) {
        document.getElementById('contactAlert').classList.add("d-block");
      }
      return res.ok;
    });
  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: 'white', position: 'relative' }}>
        <div id="projects" style={{ position: 'absolute', top: '-66px', left: '0' }}></div>

        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <SectionTitle id="sectionTitleProjects" text="My Projects" />
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
            <SectionTitle id="sectionTitleExperience" text="My Experience" />
          </div>
        </div>
        <div className="row justify-content-lg-left mx-0 mx-lg-4 mb-lg-5">
          <div className="col-12 col-lg mb-3 mb-lg-0 text-center text-lg-left">
            <img className="experience-image" src={UltimateSoftwareExperienceImage} alt="Ultimate Software" />
          </div>
          <div className="col-12 col-lg-9 mb-5 text-center text-lg-left">
            <div className="experience-title">Ultimate Software</div>
            <div className="experience-subtitle mx-md-1">TECHSTAR INTERN - IDENTITY TEAM</div>
            <div className="experience-content mx-md-4">My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre My job at ultiamte softawtre </div>
          </div>
        </div>
        <div className="row justify-content-lg-left mx-0 mx-lg-4">
          <div className="col-12 col-lg mb-2 text-center text-lg-left">
            <img className="experience-image" src={UFExperienceImage} alt="UF GatorSense - Machine Learning and Sensing Lab" />
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
            <SectionTitle id="sectionTitleContact" text="Contact Me" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col justify-content-center text-center">
            <div className="mx-md-4 mb-3">Questions? Offers? Just want to say hi?</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 md-auto justify-content-center text-center">
            <form className="needs-validation" id="contact-form" onSubmit={this.handleSubmit} noValidate>
              <div className="form-group">
                <input type="text" className="form-control" id="nameInput" name="senderName" placeholder="Name (required)" required />
                <div className="invalid-feedback">
                  Please include your name!
                </div>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="emailInput" name="senderEmail" aria-describedby="emailHelp" placeholder="Email address (optional)" />
              </div>
              <div className="form-group">
                <textarea type="text" className="form-control" id="textInput" name="senderMessage" placeholder="Message (required)" required />
                <div className="invalid-feedback">
                  I need a message!
                </div>
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
              <small id="submitHelp" className="form-text text-muted">Your secrets are safe with me.</small>
            </form>
          </div>
        </div>
        <div id="contactAlert" className="alert alert-success alert-dismissible d-none fade show mx-2 text-center" role="alert" style={{ position: 'fixed', right: '0', bottom: '0' }}>
          <strong>Message sent!</strong> Thanks for the message &mdash; I'll be sure to respond ASAP
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div style={{ paddingBottom: "26rem", display: "flex" }}></div>
      </div >
    );
  }
}
