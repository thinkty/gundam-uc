import React from 'react';

const style = {
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  header: {
    color: '#ffffff',
  },
  subheader: {
    color: '#aaaaaa',
  },
  episodesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
  },
  episodeTitle: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    color: '#ffffff',
  },
  episodeWiki: {
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
  movieContainer: {

  },
};

function Episode({ episode, index, isMobile }) {
  const { name, link } = episode;
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: isMobile ? 'space-between' : 'flex-start',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={style.episodeTitle}>
        { (index + 1) + ". " + name }
      </div>
      &nbsp;&nbsp;
      <div>
        <a href={link} target="_blank" style={style.episodeWiki}>
          Wiki
        </a>
      </div>
    </div>
  );
}

/**
 * @param type Required. Could be series, OVA, movie.
 * @param episodes Optional. Information regarding the series/OVA.
 * @param availability Required. Indicates which platform the media is available
 * to view on.
 */
export default function EventCardMediaSection({ type, episodes, availability, isMobile }) {
  return (
    <>
      <div style={style.headerContainer}>
        <div style={style.header}>
          { type }
        </div>
        &nbsp;&nbsp;
        {
          type === "Series/OVA" &&
          <div style={style.subheader}>
            { episodes.length + " episodes" }
          </div>
        }
      </div>
      {
        type === "Series/OVA" &&
        <div style={style.episodesContainer}>
          {
            episodes.map((episode, i) => (
              <Episode
                key={episode.name}
                episode={episode}
                index={i}
                isMobile={isMobile}
              />
            ))
          }
        </div>
      }
      {
        type === "Movie" &&
        <div style={style.movieContainer}>
          {/* TODO: */}
        </div>
      }
    </>
  );
}
