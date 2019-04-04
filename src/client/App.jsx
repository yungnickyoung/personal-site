import React, { Component } from 'react';
import Card from './Card';
import Navbar from './Navbar'
import ReactImage from './react.png';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div className="container" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div class="row">
            <div class="col-6 col-md-4">
              <Card image={ReactImage} alt="Alt" cardTitle="Card Title" cardDesc="Card description" projectUrl="#" />
            </div>
            <div class="col-6 col-md-4">
              <Card image={ReactImage} alt="Alt" cardTitle="Card Title" cardDesc="Card description" projectUrl="#" />
            </div>
            <div class="col-6 col-md-4">
              <Card image={ReactImage} alt="Alt" cardTitle="Card Title" cardDesc="Card description" projectUrl="#" />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
