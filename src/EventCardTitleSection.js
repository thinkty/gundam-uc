import React from 'react';

const style = {
  titleStyle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  yearStyle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa',
  },
};

export default function EventCardTitleSection({title, year}) {
  return (
    <>
      <div style={style.titleStyle}>
        { title }
      </div>
      <div style={style.yearStyle}>
        { "U.C." + (year + "").padStart(4, "0") }
      </div>
    </>
  );
}
