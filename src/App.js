import React, { Component } from 'react';
import Title from './Title';
import Timeline from './Timeline';
import list from './config/list.json';

const style = {
  rootContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    overflow: 'auto',
  },
  gap: {
    flexShrink: 0,
    height: 100,
  },
};

export default class App extends Component {
  render() {
    return (
      <div style={style.rootContainer}>
        <Title />
        <div style={style.gap} />
        <Timeline list={list} />
      </div>
    );
  }
}
