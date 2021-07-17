import React from 'react';

const style = {
  flexContainer: {
    height: '100%',
    minHeight: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  divider: {
    height: '100%',
    minHeight: 100,
    width: 2,
    color: '#ffffff',
  },
};

export default function TimelineEdge() {
  return (
    <div style={style.flexContainer}>
      <hr style={style.divider} />
    </div>
  );
}
