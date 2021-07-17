import React, { useState } from 'react';

const style = {
  node: {
    height: 32,
    width: 32,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: '50%',
  },
  baseColor: 'transparent',
  focusedColor: '#fff',
};

export default function TimelineNode({ item }) {
  const [focused, setFocus] = useState(false);
  const [selected, setSelection] = useState(false);

  return (
    <div 
      style={{
        ...style.node,
        backgroundColor: focused || selected ? style.focusedColor : style.baseColor,
      }}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      onClick={() => setSelection(!selected)}
    >
      
    </div>
  );
}
