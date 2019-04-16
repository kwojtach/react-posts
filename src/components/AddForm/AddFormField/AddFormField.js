import React                 from 'react';
import {ErrorMessage, Field} from 'formik';

import classes from './AddFormField.module.scss';

const AddFormField = ({ formField }) => {
  return (
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
  )
};

export default AddFormField;
