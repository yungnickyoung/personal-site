import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/projectmodal.css';
import PersonalSiteImage from './assets/personalsite/card-personalsite.png';
import SmashstatsImage from './assets/smashstats/card-smashstats.png';
import VercareImage from './assets/vercare/card-vercare.png';

export default class ProjectModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselID = this.props.id + "Carousel";
    const carouselImages = [];
    const carouselIndicators = [];
    const buttons = [];

    // Create carousel images and indicators
    for (var i = 0; i < this.props.images.length; i++) {
      carouselIndicators.push(<li data-target={"#" + carouselID} data-slide-to={"" + i} key={i} className={i == 0 ? "active" : ""}></li>)
      carouselImages.push(<div className={"carousel-item" + (i == 0 ? " active" : "")} key={i}><img src={this.props.images[i]} className="d-block w-100" alt={this.props.alt} /></div>)
    }

    // Create buttons for links to repos and other project URLs
    this.props.buttonTitles.map((title, i) => {
      buttons.push(<a role="button" className="btn btn-outline-secondary mr-2" href={this.props.buttonUrls[i]} key={i} target="_blank" rel="noopener">{title}</a>)
    });

    return (
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby={this.props.title} aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div id={carouselID} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  {carouselIndicators}
                </ol>
                <div className="carousel-inner">
                  {carouselImages}
                </div>
                <a className="carousel-control-prev" href={"#" + carouselID} role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={"#" + carouselID} role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <h2 style={{ fontWeight: '700', fontSize: '2rem' }} className="mt-3 px-4">{this.props.title}</h2>
                <div className="mx-4 mt-1 mb-4" style={{ height: '4px', backgroundColor: '#48c08c' }}></div>
              <p className="px-4">{this.props.desc}</p>

            </div>
            <div className="modal-footer" style={{justifyContent: 'space-between'}}>
              <div>
                {buttons}
              </div>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectModal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  desc: PropTypes.string.isRequired,
  buttonTitles: PropTypes.array.isRequired,
  buttonUrls: PropTypes.array.isRequired
};