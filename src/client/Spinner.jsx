import React from 'react';
import './css/spinner.css'

export default function Spinner(props) {
  return (
    <div class="semipolar-spinner my-4" size="200" color="#48c08c">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
  );
}