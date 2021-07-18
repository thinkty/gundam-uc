import React from 'react';
import Event from './Event';

const style = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60vw',
    minWidth: 350,
  },
};

export default function Timeline({ list }) {
  // This variable is used to decide whether the current year is identical to
  // the year in the item before
  let lastYear = 0;

  return (
    <div style={style.flexContainer}>
      {
        list.map((item) => {
          const { year, title } = item;

          // Hide year if the current year is identical to the year before
          const eventComponent = (
            <Event
              key={title}
              item={item}
              isSameYear={year === lastYear}
            />
          );
          lastYear = year;
          return eventComponent;
        })
      }
    </div>
  );
}
