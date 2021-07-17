import React, { useState } from 'react';

const style = {
  mainStoryStyle: {
    height: 32,
    width: 32,
    flexShrink: 0,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  sideStoryStyle: {
    height: 32,
    width: 32,
    flexShrink: 0,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideStorySecondaryStyle: {
    flexShrink: 0,
    height: 16,
    width: 16,
    margin: 8,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: '50%',
  },
  baseColor: 'transparent',
  focusedColor: '#aaaaaa',
  selectedColor: '#ffffff'
};

export default function EventNode({ selected, setSelection, isMain }) {
  const [focused, setFocus] = useState(false);

  // Set the color of the node by the current focus & selection status
  let currentColor = focused ? style.focusedColor : style.baseColor;

  if (selected) {
    currentColor = style.selectedColor;
  }

  // Change the style of the node by whether the item is a main storyline or not
  return (
    isMain
    ?
      <div 
        style={{
          ...style.mainStoryStyle,
          backgroundColor: currentColor,
        }}
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        onClick={() => setSelection(!selected)}
      />
    :
      <div
        style={style.sideStoryStyle}
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        onClick={() => setSelection(!selected)}
      >
        <div
          style={{
            ...style.sideStorySecondaryStyle,
            backgroundColor: currentColor
          }}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          onClick={() => setSelection(!selected)}
        />
      </div>
  );
}
