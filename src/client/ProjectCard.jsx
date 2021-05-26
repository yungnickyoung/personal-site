import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/projectcard.css';


/**
 * Card for a project
 */
export default class ProjectCard extends Component {
  /**
   * Initialize mouse hover state to false
   */
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  /**
   * Set mouse hover state as true on mouse enter
   */
  mouseEnter = () => {
    this.setState({
      isHover: true
    });
  }

  /**
   * Set mouse hover state as false on mouse leave
   */
  mouseLeave = () => {
    this.setState({
      isHover: false
    });
  }

  render() {
    var isHover = this.state.isHover;

    var imageClass = "card-img card-image";
    var contentClass = "card-content";

    if (isHover) {
      imageClass += " image-hover";
      contentClass += " card-content-hover";
    }

    return (
      <>
        <div className="card" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} data-toggle="modal" data-target={"#" + this.props.modalID}>
          <div className="card-base">
            <img className={imageClass} src={require(`${this.props.image}`)} alt={this.props.cardTitle} title={this.props.cardTitle} />
            <div className="card-img-overlay" style={{ padding: '.1rem' }}>
              <div className={contentClass} >
                <div className="px-2 pt-md-3 card-title">{this.props.cardTitle}</div>
                <div className="d-flex flex-row justify-content-center mx-1 mx-md-2" style={{ flexWrap: 'wrap' }}>
                  {this.props.tools.map((tool, i) => <div className="project-tool mx-1 my-1 px-2 py-1" style={{ display: 'inline' }} key={i}>{tool}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDesc: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  modalID: PropTypes.string.isRequired
};

