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
  yearWikiContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearStyle: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#aaaaaa',
  },
  wikiStyle: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#000000',
    backgroundColor: '#aaaaaa',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
  },
};

export default function EventCardTitleSection({title, year, wiki}) {
  return (
    <>
      <div style={style.titleStyle}>
        { title }
      </div>
      <div style={style.yearWikiContainer}>
        <div style={style.yearStyle}>
          { "U.C." + (year + "").padStart(4, "0")}
        </div>
        &nbsp;
        <div>
          <a href={wiki} target="_blank" style={style.wikiStyle}>
            Wiki
          </a>
        </div>
      </div>
    </>
  );
}
