import React, { Fragment } from 'react';


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: '#0275d8' };
  } else {
    return { color: '#ffffff' };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className='nav navbar-dark bg-dark menustyle'>
      <li className='nav-item'>
        <Link className='nav-link' style={isActive(history, '/')} to='/'>
          <img src='../img/logo.png' alt='logo' className='menulogo' />
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' style={isActive(history, '/')} to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          style={isActive(history, '/shop')}
          to='/shop'
        >
          Shop
        </Link>
      </li>


    </ul>
  </div>


);


