import React from 'react';
import PropTypes from 'prop-types';

export default function SectionTitle(props) {
  return (
    <>
      <div style={{ paddingTop: "3.7rem" }}></div>
      <h1 style={{ fontWeight: '700', fontSize: '3rem' }}>{props.text}</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ margin: '5px 0 50px 0', width: '100px', height: '8px', backgroundColor: '#48c08c' }}></div>
      </div>
    </>
  );
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired
};