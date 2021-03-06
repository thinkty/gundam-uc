import React from 'react';

const style = {
  flexContainer: {
    position: 'sticky',
    top: 0,
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(rgba(0,0,0,1) 60%, rgba(0,0,0,0))',
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
  primaryText: {
    fontFamily: 'sans-serif',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 10,
    color: '#ffffff',
  },
  divider: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa',
  },
  secondaryText: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa',
    marginLeft: 10,
  },
};

export default function Title({ isMobile }) {

  return (
    <div style={style.flexContainer}>
      <div style={style.primaryText}>
        GUNDAM
      </div>
      <div style={style.divider}>
        •
      </div>
      <div style={style.secondaryText}>
        {
          isMobile ? 'UC' : 'Universal Century'
        }
      </div>
    </div>
  );
}
