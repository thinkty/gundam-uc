import React from 'react';
import list from './list.json';
import Item from './Item';

export default function Container() {
  return (
    <div>
      <table>
        <tbody>
          {
            list.map(item => <Item item={item} />)
          }
        </tbody>
      </table>
    </div>
  );
}
