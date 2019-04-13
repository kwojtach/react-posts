import React from 'react';

import classes from './Spinner.module.scss';

const spinner = props => (
  <>
    <div className={classes.Spinner}>
      <div></div>
      <p>{props.children}</p>
    </div>
  </>
);

export default spinner;