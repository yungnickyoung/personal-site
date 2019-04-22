import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import './css/projectcard.css'
import PersonalSiteImage from './card-personal-site.png';
import SmashstatsImage from './card-smashstats.png';
import VercareImage from './card-vercare.png';

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

/*
 * Props:
 *  - image
 *  - alt
 *  - cardTitle
 *  - cardDesc
 *  - projectUrl
 */
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      open: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  mouseEnter() {
    this.setState({
      isHover: true
    });
  }

  mouseLeave() {
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
        <Card className={classes.card + ' card-base mx-auto'}>
          <CardActionArea onClick={this.handleOpen}>
            <CardMedia className={classes.media + " " + imageClass} image={this.props.image} title={this.props.alt} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
            <div className={contentClass + " px-0"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <div className="px-2 card-title">{this.props.cardTitle}</div>
              {/* <div className="container-fluid px-2">
                <div className="row no-gutters px-0"> */}
              <div className="d-flex flex-row justify-content-center mx-2" style={{ flexWrap: 'wrap' }}>
                {this.props.tools.map((tool, i) => <div className="project-tool px-2 py-1" style={{ display: 'inline' }}>{tool}</div>)}

                {/* <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>{this.props.tools.map((tool, i) => <li className="project-tool px-2" style={{display: 'inline', flexWrap: 'wrap'}}>{tool}</li>)}</ul> */}
              </div>
              {/* </div>
            </div> */}
              <div><a role="button" className="mt-4 btn btn-primary">Learn more</a></div>
            </div>
          </CardActionArea>
        </Card>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div className={classes.paper}>
            <div id="modalCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#modalCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#modalCarousel" data-slide-to="1"></li>
                <li data-target="#modalCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={PersonalSiteImage} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={SmashstatsImage} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={VercareImage} class="d-block w-100" alt="..." />
                </div>
              </div>
              <a class="carousel-control-prev" href="#modalCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#modalCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </Modal>
      </>
            );
          }
        }
        
ProjectCard.propTypes = {
              classes: PropTypes.object.isRequired,
            image: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
            // tools: PropTypes.array.isRequired
          };
          
          export default withStyles(styles)(ProjectCard);
          
          
