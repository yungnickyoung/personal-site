import React from 'react';
import './css/spinner.css'

export default function Spinner(props) {
  return (
    <div className="semipolar-spinner my-4 d-none d-md-block" size="200" color="#48c08c">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
    </div>
  );
}