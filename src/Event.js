import React, { useState } from 'react';
import EventYear from './EventYear';
import EventNode from './EventNode';
import EventEdge from './EventEdge';
import EventCard from './EventCard';

const style = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  yearFlexContainer: {
    flex: 1,
    paddingRight: 10,
  },
  nodeEdgeFlexContainer: {
    flex: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardFlexContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 10,
  },
};

export default function Event({ item }) {
  const { year } = item;
  const [ selected, setSelection ] = useState(false);

  return (
    <div style={style.flexContainer}>
      <div style={style.yearFlexContainer}>
        <EventYear year={year} />
      </div>
      <div style={style.nodeEdgeFlexContainer}>
        <EventNode
          selected={selected}
          setSelection={setSelection}
        />
        <EventEdge />
      </div>
      <div style={style.cardFlexContainer}>
        <EventCard item={item} selected={selected} />
      </div>
    </div>
  );
}
