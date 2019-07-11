import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/projectmodal.css';

/**
 * Modal dialog for a project
 */
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
      carouselIndicators.push(
        <li
          data-target={"#" + carouselID}
          data-slide-to={"" + i} key={i}
          className={i == 0 ? "active" : ""}>
        </li>
      );

      carouselImages.push(
        <div className={"carousel-item" + (i == 0 ? " active" : "")} key={i}>
          <img
            src={require(`${this.props.images[i]}`)}
            className="d-block w-100"
            alt={this.props.alt} />
        </div>
      );
    }

    // Create buttons for links to repos and other project URLs
    this.props.buttonTitles.map((title, i) => {
      buttons.push(
        <a role="button" className="btn btn-outline-secondary mr-2" href={this.props.buttonUrls[i]} key={i} target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
            <path fill="black" d="M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z"
            />
          </svg>
          {" " + title}
        </a>
      )
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
            <div className="modal-footer" style={{ justifyContent: 'space-between' }}>
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