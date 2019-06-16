import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ProjectModal from './ProjectModal';
import $ from 'jquery';

import './css/projectcard.css';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  }
});

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  mouseEnter = () => {
    this.setState({
      isHover: true
    });
  }

  mouseLeave = () => {
    this.setState({
      isHover: false
    });
  }

  render() {
    const { classes } = this.props;
    var isHover = this.state.isHover;

    var imageClass = "card-image";
    var contentClass = "card-content";
    if (isHover) {
      imageClass += " image-hover";
      contentClass += " card-content-hover";
    }

    return (
      <>
        <Card className={classes.card + ' card-base mx-auto'} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
          <CardActionArea>
            <CardMedia className={classes.media + " " + imageClass} image={this.props.image} title={this.props.alt} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
            <div className={contentClass + " px-0"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <div className="px-2 card-title">{this.props.cardTitle}</div>
              <div className="d-flex flex-row justify-content-center mx-2" style={{ flexWrap: 'wrap' }}>
                {this.props.tools.map((tool, i) => <div className="project-tool px-2 py-1" style={{ display: 'inline' }} key={i}>{tool}</div>)}
              </div>
              <div>
                <a role="button" id={"btn-" + this.props.modalID}className="mt-4 btn btn-secondary" data-toggle="modal" data-target={"#" + this.props.modalID}>Learn more</a>
              </div>
            </div>
          </CardActionArea>
        </Card>
        <ProjectModal
          id={this.props.modalID}
          title={this.props.cardTitle}
          images={this.props.modalImages}
          alt={this.props.alt}
          desc={this.props.cardDesc}
          buttonTitles={this.props.buttonTitles}
          buttonUrls={this.props.buttonUrls}
        />
      </>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDesc: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  modalID: PropTypes.string.isRequired,
  modalImages: PropTypes.array.isRequired,
  buttonTitles: PropTypes.array.isRequired,
  buttonUrls: PropTypes.array.isRequired
};

export default withStyles(styles)(ProjectCard);


