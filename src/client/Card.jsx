import React from 'react';

/*
 * Props:
 *  - image
 *  - alt
 *  - cardTitle
 *  - cardDesc
 *  - projectUrl
 */
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title" style={{fontFamily: "'Rubik', sans-serif", textAlign: "center"}}>{props.cardTitle}</h5>
        <p className="card-text" style={{textAlign: "center"}}>{props.cardDesc}</p>
        <a href="#" className="btn btn-primary">{props.projectUrl}</a>
      </div>
    </div>
  );
}
