import React, { useState } from 'react';

const style = {
  container: {

  },
  header: {
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    margin: 10,
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chip: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderRadius: 20,
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    color: '#ffffff',
    fontSize: 16,
  },
  chipTooltip: {
    width: 200,
    backgroundColor: '#aaaaaa',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: 16,
    borderRadius: 5,
    padding: 5,
    zIndex: 10,
    position: 'absolute',
    top: 50,
    left: 10,
  },
};

function CharacterChip({ character }) {
  const { name, desc, link } = character;
  const [isHovering, setHover] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={style.chip}
        onClick={() => { window.open(link); }}
        onMouseEnter={() => { setHover(true); }}
        onMouseLeave={() => { setHover(false); }}
      >
        { name }
      </div>
      {
        isHovering &&
        <span style={style.chipTooltip}>
          { desc }
        </span>
      }
    </div>
  );
}

export default function EventCardCastSection({ isMobile, characters, mobiles }) {
  return (
    <div style={style.container}>
      <div style={style.header}>
        { '[ Characters ]' }
      </div>
      <div style={style.chipContainer}>
        {
          characters.map((character) => (
            <CharacterChip
              key={character.name}
              character={character}
            />
          ))
        }
      </div>
    </div>
  );
}
