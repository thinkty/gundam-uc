import React from 'react';

const style = {
  flexContainer: {
    height: 36,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
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

export default function EventYear({ year, isSameYear }) {
  return (
    <div style={style.flexContainer}>
      <div style={isSameYear ? style.displayNone : style.divYearText}>
        {
          "U.C." + (year + "").padStart(4, "0")
        }
      </div>
    </div>
  );
}
