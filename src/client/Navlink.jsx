import React from 'react';
import PropTypes from 'prop-types';
import './css/navbar.css';

function Navlink(props) {
  let linkClass = "nav-link py-2 menu-item";
  if (props.isActive) {
    linkClass += " active";
  }

  return (
    <a className={linkClass} onClick={props.onClick}>
      {props.text}
      {props.isActive && <span className="sr-only">(current)</span>}
    </a>
  );
}

Navlink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Navlink;