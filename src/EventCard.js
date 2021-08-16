import React, { useState, useEffect, useRef } from 'react';
import EventCardCastSection from './EventCardCastSection';
import EventCardContentSection from './EventCardContentSection';
import EventCardMediaSection from './EventCardMediaSection';
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

};

export default function EventCard({ item, isMobile }) {
  const {
    title,
    nick,
    year,
    img,
    synop,
    characters,
    mobiles,
    wiki,
    type,
    episodes,
    availability,
    main,
  } = item;
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
      <EventCardTitleSection
        title={title}
        year={year}
        wiki={wiki}
      />
      <hr />
      <EventCardContentSection
        isMobile={isMobile}
        img={img}
        synop={synop}
      />
      <hr />
      <EventCardCastSection
        isMobile={isMobile}
        characters={characters}
        mobiles={mobiles}
      />
      <hr />
      <EventCardMediaSection
        type={type}
        episodes={episodes}
        availability={availability}
        isMobile={isMobile}
      />
    </div>
  );
}
