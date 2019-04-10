import React from 'react';
import PropTypes from 'prop-types';

function SectionTitle(props) {
  return (
      <h1 className="mb-5" style={{textAlign: 'center', fontWeight: '700', fontSize: '3rem'}}>{props.text}</h1>
  );
}

SectionTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default SectionTitle;