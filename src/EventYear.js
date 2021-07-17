import React from 'react';

const style = {
  flexContainer: {
    height: 36,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
  },
  divText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa',
  },
};

export default function EventYear({ year }) {
  return (
    <div style={style.flexContainer}>
      <div style={style.divText}>
        {
          "U.C." + (year + "").padStart(4, "0")
        }
      </div>
    </div>
  );
}
