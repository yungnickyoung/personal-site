import React, { Component } from 'react';
import { Network, DataSet } from 'vis';

const IMGDIR = './src/client/assets/skillsgraph/';

var nodes = [
  { id: 1, label: 'Java', shape: 'image', image: IMGDIR + 'java.png' },
  { id: 11, label: 'Spring', shape: 'image', image: IMGDIR + 'spring.png' },
  { id: 2, label: 'C++' },
  { id: 3, label: 'JavaScript' },
  { id: 31, label: 'jQuery' },
  { id: 32, label: 'React.js' },
  { id: 33, label: 'Express/Node.js' },
  { id: 4, label: 'Python' },
  { id: 41, label: 'Flask' },
  { id: 5, label: 'Front-end' },
  { id: 51, label: 'HTML' },
  { id: 52, label: 'CSS' },
  { id: 53, label: 'Bootstrap', shape: 'image', image: IMGDIR + 'bootstrap.png' },
];

var edges = [
  { from: 1, to: 11, color: "red" },
  { from: 3, to: 31, color: 'red'},
  { from: 3, to: 32 },
  { from: 3, to: 33 },
  { from: 4, to: 41 },
  { from: 5, to: 51 },
  { from: 5, to: 52 },
  { from: 5, to: 53 }
];

var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {
    size: 30
  },
  edges: {
    color: 'red'
  },
  height: '100%',
  width: '100%'
};


export default class SkillsGraph extends Component {
  componentDidMount() {
    var network = new Network(this.refs.myRef, data, options);
  }
  render() {
    return (
      <div ref="myRef" style={{width: '100%', height: '100%'}}></div>
    );
  }
}