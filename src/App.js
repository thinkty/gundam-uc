import React, { Component } from 'react';
import Title from './Title';
import Container from './Container';

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
        }}
      >
        <Title />
        <Container />
      </div>
    );
  }
}
