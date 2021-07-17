import React, { Component } from 'react';
import Title from './Title';
import Timeline from './Timeline';
import list from './config/list.json';

const style = {
  gap: {
    height: 100,
  },
};

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          overflow: 'auto',
        }}
      >
        <div>
          <Title />
          <div style={style.gap} />
          <Timeline list={list} />
        </div>
      </div>
    );
  }
}
