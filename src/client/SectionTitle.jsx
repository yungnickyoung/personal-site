import React from 'react';
import PropTypes from 'prop-types';

function SectionTitle(props) {
  return (
      <h2 style={{textAlign: 'center'}}>{props.text}</h2>
  );
}

SectionTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default SectionTitle;