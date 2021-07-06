import React from 'react';

export default function Item({ item }) {
  const { title, nick, year, img, type, main } = item;

  return (
    <tr style={{ fontFamily: "sans-serif", padding: 5 }}>
      <td>
        <img src={img} />
      </td>
      <td>
        { nick }
      </td>
      <td>
        { "U.C. " + (year + "").padStart(4, "0") }
      </td>
      <td>
        { type }
      </td>
    </tr>
  );
}
