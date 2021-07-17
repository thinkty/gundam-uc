import React from 'react';
import Event from './Event';

const style = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default function Timeline({ list }) {
  return (
    <div style={style.flexContainer}>
      {
        list.map((item) => (
          <Event key={item.title} item={item} />
        ))
      }
    </div>
  );
}
