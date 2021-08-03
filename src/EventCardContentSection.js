import React from 'react';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  divider: {
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

export default function EventCardContentSection({isMobile, img, synop}) {
  return (
    <>
      <div style={isMobile ? style.containerMobile : style.container}>
        <img src={img}/>
        <div style={style.divider} />
        <div style={style.synopsisStyle}>
          { synop }
        </div>
      </div>
    </>
  );
}
