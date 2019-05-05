// @flow

import React                 from 'react';
import {ErrorMessage, Field} from 'formik';

import classes from './AddFormField.module.scss';

type Props = {
  formField: {
    name:  string,
    type:  string,
    label: string
  }
};

const AddFormField = ({ formField } : Props) => (
  <div className={classes.AddFormField}>
    <Field
      name={formField.name}
      render={({ field }) =>
        <label>
          <span>{formField.label}</span>
          {formField.type === 'textarea' ?
            <textarea {...field} />
            : <input {...field} type={formField.type} />}
        </label>
      } />

    <ErrorMessage name={formField.name} component="p" />
  </div>
);


export default AddFormField;
