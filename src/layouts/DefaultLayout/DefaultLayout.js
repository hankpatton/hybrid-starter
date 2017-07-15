import React from 'react';
import logo from './logo.svg';
import './DefaultLayout.css';

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="default-layout-header">
        <img src={logo} className="default-layout-logo" alt="logo" />
        <h2>Welcome to Miguel's App</h2>
      </div>
      <div className='default-layout-body'>
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout;
