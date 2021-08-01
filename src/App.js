import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [isMobile, setMobile] = useState(window.innerWidth < 500);

  const updateViewportStatus = () => {
    setMobile(window.innerWidth < 500);
  };

  // Register and cleanup event listener for "resizes"
  useEffect(() => {
    // Register
    window.addEventListener('resize', updateViewportStatus);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateViewportStatus);
    };
  }, []);

  return (
    <div style={style.rootContainer}>
      <Title isMobile={isMobile} />
      <Timeline list={list} isMobile={isMobile} />
      <TimelineFooter />
    </div>
  );
}
