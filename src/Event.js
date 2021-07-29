import React, { useState } from 'react';
import EventYear from './EventYear';
import EventNode from './EventNode';
import EventEdge from './EventEdge';
import EventNickname from './EventNickname';
import EventCard from './EventCard';

const style = {
  baseContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  eventHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 36,
    paddingTop: 10,
    paddingBottom: 10,
  },
  eventYear: {
    flex: 1,
    paddingRight: 10,
  },
  eventNode: {
    flex: 0,
  },
  eventNickname: {
    flex: 1,
    paddingLeft: 10,
  },
  eventContent: {
    flex: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
};

export default function Event({ item, isSameYear }) {
  const { year, main, nick } = item;
  const [ selected, setSelection ] = useState(false);

  return (
    <div style={style.baseContainer}>
      <div style={style.eventHeader}>
        <div style={style.eventYear}>
          <EventYear
            year={year}
            isSameYear={isSameYear}
            selected={selected}
          />
        </div>
        <div style={style.eventNode}>
          <EventNode
            selected={selected}
            setSelection={setSelection}
            isMain={main}
          />
        </div>
        <div style={style.eventNickname}>
          <EventNickname
            nick={nick}
            selected={selected}
          />
        </div>
      </div>
      <div style={style.eventContent}>
        <EventCard item={item} selected={selected} />
        <EventEdge />
      </div>
    </div>
  );
}
