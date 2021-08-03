import React, { useState, useEffect, useRef } from 'react';
import EventCardTitleSection from './EventCardTitleSection';

const style = {
  baseContainer: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    backgroundColor: '#000000',
    padding: 10,
    opacity: 0,
    transition: 'opacity 1s',
  },
  logoSynopsisContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logoSynopsisContainerMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoSynopsisDivider: {
    flexShrink: 0,
    width: 10,
    height: 10,
  },
  synopsisStyle: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 1.5,
  },
};

export default function EventCard({ item, isMobile }) {
  const { title, nick, year, img, synop, type, main } = item;
  const [show, setShow] = useState(false);
  const containerStyle = {
    ...style.baseContainer,
    opacity: show ? 1 : 0,
  };

  // Similar to componentDidMount to animate Fade In of the component
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // Simulating componentDidMount to animate FadeIn
      setShow(true);
      mounted.current = true;
    } else {
      // TODO: Simulating componentDidUpdate to delay unmount to animate FadeOut
    }
  });

  return (
    <div style={containerStyle}>
      <EventCardTitleSection title={title} year={year} />
      <hr />
      <div style={isMobile ? style.logoSynopsisContainerMobile : style.logoSynopsisContainer}>
        <img src={img}/>
        <div style={style.logoSynopsisDivider} />
        <div style={style.synopsisStyle}>
          { synop }
        </div>
      </div>
      <hr />
    </div>
  );
}
