import React from 'react';

const style = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 100,
  },
  primaryText: {
    fontFamily: 'sans-serif',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 10,
    marginRight: -10,
    color: '#ffffff',
  },
  divider: {
    width: '100%',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
  },
  secondaryText: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa'
  },
};

export default function Title() {
  return (
    <div style={style.flexContainer}>
      <div style={style.primaryText}>
        GUNDAM
      </div>
      <hr style={style.divider}/>
      <div style={style.secondaryText}>
        Universal Century
      </div>
    </div>
  );
}
