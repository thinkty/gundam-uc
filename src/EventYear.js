import React from 'react';

const style = {
  baseContainer: {
    height: 36,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
  },
  selected: {
    transition: 'opacity 0.2s',
    opacity: 0,
  },
  unselected: {
    transition: 'opacity 0.2s',
    opacity: 1,
  },
  divYearText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa',
  },
  displayNone: {
    display: 'none',
  },
};

export default function EventYear({ year, isSameYear, selected }) {
  const containerStyle = {
    ...style.baseContainer,
    ...(selected ? style.selected : style.unselected),
  };

  return (
    <div style={containerStyle}>
      <div style={isSameYear ? style.displayNone : style.divYearText}>
        {
          "U.C." + (year + "").padStart(4, "0")
        }
      </div>
    </div>
  );
}
