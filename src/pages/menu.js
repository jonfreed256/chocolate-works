import React from 'react';
import { Link } from 'gatsby-link';

const Menu = () => (
  <div
    style={{
      background: '#7e1323',
      paddingTop: '10px'
    }}>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/birthdays'>Home</Link>
      </li>
      <li>
        <Link to='/workshops'>Workshops</Link>
      </li>
      <li>
        <Link to='/fieldtrips'>Fieldtrips</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
