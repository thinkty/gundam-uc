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
  selected: {
    transition: 'opacity 0.2s',
    opacity: 0,
  },
  unselected: {
    transition: 'opacity 0.2s',
    opacity: 1,
  },
  divTitleText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#ffffff',
  },
};

export default function EventNickname({ nick, selected }) {
  const containerStyle = {
    ...style.baseContainer,
    ...(selected ? style.selected : style.unselected),
  };

  return (
    <div style={containerStyle}>
      <div style={style.divTitleText}>
        {
          nick
        }
      </div>
    </div>
  );
}
