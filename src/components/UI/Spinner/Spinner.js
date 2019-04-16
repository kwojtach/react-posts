import React from 'react';

import classes from './Spinner.module.scss';

const Spinner = props => (
  <>
    <div className={classes.Spinner}>
      <div></div>
      <p>{props.children}</p>
    </div>
  </>
);

export default Spinner;
