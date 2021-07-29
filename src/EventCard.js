import React from 'react';

const style = {
  baseContainer: {
    display: 'inline-block',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    backgroundColor: '#000000',
    padding: 10,
  },
  selectedFlexContainer: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    backgroundColor: '#000000',
    padding: 10,
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

export default function EventCard({ item, selected }) {
  const { title, nick, year, img, type, main } = item;

  return (
    selected &&
    <div style={style.selectedFlexContainer}>
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
