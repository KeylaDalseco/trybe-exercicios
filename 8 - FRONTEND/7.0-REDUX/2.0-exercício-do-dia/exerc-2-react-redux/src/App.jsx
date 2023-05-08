import React from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TrafficSignal />
        <Cars />
      </div>
    );
  }
}
