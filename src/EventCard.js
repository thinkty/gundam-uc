import React from 'react';

const style = {
  hideContainer: {
    display: 'none',
  },
  flexContainer: {
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
    color: '#ffffff'
  }
};

export default function EventCard({ item, selected }) {
  const { title, nick, year, img, type, main } = item;

  return (
    <div style={selected ? style.flexContainer : style.hideContainer}>
      <div style={style.divTitleText}>
        {
          title
        }
      </div>
    </div>
  );
}
