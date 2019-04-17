import React              from 'react';
import { ToastContainer } from 'react-toastify';

import classes from './Layout.module.scss';

const Layout = ({ children }) =>  (
  <>
    <ToastContainer style={{fontSize: '1.5rem'}}/>

    <main className={classes.Content}>
      {children}
    </main>
  </>

);

export default Layout;
