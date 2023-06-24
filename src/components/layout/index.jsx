import React, { Fragment } from 'react';
import Navbar from './navbar';
import Preloader from './preloader';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div>
      {children}
      </div>
      <Preloader />
    </Fragment>
  )
}

export default Layout