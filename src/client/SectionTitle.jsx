import React from 'react';
import PropTypes from 'prop-types';

import './css/sectiontitle.css'

export default function SectionTitle(props) {
  return (
    <div>
      <div style={{ paddingTop: "3.7rem" }}></div>
      <h1 className="section-title wow slideInLeft" data-wow-delay=".5s" id={props.id} style={{ fontWeight: '700', fontSize: '3rem'}}>{props.text}</h1>
      <div className="d-flex align-items-center justify-content-center wow slideInRight" data-wow-delay=".6s">
        <div style={{ margin: '5px 0 50px 0', width: '100px', height: '8px', backgroundColor: '#48c08c' }}></div>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};