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
    transition: 'opacity 0.5s',
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
    opacity: selected ? 0 : 1,
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
