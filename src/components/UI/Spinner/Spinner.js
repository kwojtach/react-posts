import React from 'react';

import classes from './Spinner.module.scss';

const Spinner = ({ children }) => (
  <>
    <div className={classes.Spinner}>
      <div></div>
      <p>{children}</p>
    </div>
  </>
);

export default Spinner;
