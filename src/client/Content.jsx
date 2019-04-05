import React, { Component } from 'react';
import CardList from './CardList'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Content extends Component {
  render() {
    return (
      <ScrollableAnchor id={"projects"}>
      <div className="container" style={{ backgroundColor: 'white' }}>
        
        {/* TODO - EXTRACT THIS OFFSET INTO COMPONENT? */}
        <div style={{paddingTop: "3.7rem"}}></div>
        <div className="hidden-lg-up" style={{paddingTop: "2.3rem"}}></div>

        <CardList />

        <div style={{paddingBottom: "3.7rem", display: "flex"}}></div>
      </div>
      </ScrollableAnchor>
    );
  }
}
