import React, { useState } from 'react';

const style = {
  node: {
    flexShrink: 0,
    height: 32,
    width: 32,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  baseColor: 'transparent',
  focusedColor: '#aaaaaa',
  selectedColor: '#ffffff'
};

export default function EventNode({ selected, setSelection }) {
  const [focused, setFocus] = useState(false);

  return (
    <div 
      style={{
        ...style.node,
        backgroundColor: selected ? style.selectedColor : focused ? style.focusedColor : style.baseColor,
      }}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      onClick={() => setSelection(!selected)}
    />
  );
}
