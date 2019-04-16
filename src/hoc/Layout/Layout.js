import React              from 'react';
import { ToastContainer } from 'react-toastify';

import classes from './Layout.module.scss';

const Layout = props => {
  return (
    <>
      <ToastContainer style={{fontSize: '1.5rem'}}/>

      <main className={classes.Content}>
        {props.children}
      </main>
    </>

  );
};

export default Layout;
