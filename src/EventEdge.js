import React from 'react';

const style = {
  flexContainer: {
    flex: 1,
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

export default function EventEdge() {
  return (
    <div style={style.flexContainer}>
      <hr style={style.divider} />
    </div>
  );
}
