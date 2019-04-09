import React from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
function ProjectCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}  image={props.image} title={props.alt} />
      </CardActionArea>
    </Card>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default withStyles(styles)(ProjectCard);


