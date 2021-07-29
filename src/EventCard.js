import React, { useState, useEffect, useRef } from 'react';

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
  divTitleText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default function EventCard({ item }) {
  const { title, nick, year, img, type, main } = item;
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
      <div style={style.divTitleText}>
        {
          title
        }
      </div>
      <hr/>
      <div style={style.logoContainer}>
        <img src={img}/>
      </div>
    </div>
  );
}
