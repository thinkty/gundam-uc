import React, { Component } from 'react';
import Title from './Title';
import Timeline from './Timeline';
import list from './config/list.json';
import TimelineFooter from './TimelineFooter';

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
};

export default class App extends Component {
  render() {
    return (
      <div style={style.rootContainer}>
        <Title />
        <Timeline list={list} />
        <TimelineFooter />
      </div>
    );
  }
}
