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
    <div className="card" style={{maxWidth: '18rem'}}>
      <img src={props.image} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardDesc}</p>
        <a href="#" className="btn btn-primary">{props.projectUrl}</a>
      </div>
    </div>
  );
}
