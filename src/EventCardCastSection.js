import React from 'react';

const style = {
  container: {

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
  chipImage: {

  },
};

function CharacterChip({ character }) {
  const { name, link, img } = character;
  return (
    <div
      style={style.chip}
      onClick={() => { window.open(link); }}
    >
      { name }
    </div>
  );
}

export default function EventCardCastSection({ isMobile, characters, mobiles }) {
  return (
    <div style={style.container}>
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
