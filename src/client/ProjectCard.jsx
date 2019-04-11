import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './css/projectcard.css'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};


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
      isHover: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

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
      <Card className={classes.card + ' card-base mx-auto'}>
        <CardActionArea>
          <CardMedia className={classes.media + " " + imageClass}  image={this.props.image} title={this.props.alt} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}/>
            <div className={contentClass + " px-0"} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <div className="px-2 card-title">{this.props.cardTitle}</div>
              {/* <div className="container-fluid px-2">
                <div className="row no-gutters px-0"> */}
                  <div className="d-flex flex-row justify-content-center mx-2" style={{flexWrap: 'wrap'}}>
                  {this.props.tools.map((tool, i) => <div className="project-tool px-2 py-1" style={{display: 'inline'}}>{tool}</div>)}

                    {/* <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>{this.props.tools.map((tool, i) => <li className="project-tool px-2" style={{display: 'inline', flexWrap: 'wrap'}}>{tool}</li>)}</ul> */}
                  </div>
              {/* </div>
            </div> */}
              <div><a role="button" className="mt-4 btn btn-primary">Learn more</a></div>
            </div>
        </CardActionArea>
      </Card>
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


