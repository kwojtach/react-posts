import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from '../UI/Button/Button';
import classes from './AddForm.module.scss';

/**
 * addForm component using Formik:
 * @see See [Formik](https://jaredpalmer.com/formik/) for Formik docs
 *
 * To use, you need to pass props:
 * title - form title
 * fields - an array of fields of the form which holds objects like:
 *    {
 *      type - field type e.g. "text"
 *      name - field name which will be passed as value to submit form function e.g. "body"
 *      label - field label e.g. "Body"
 *    }
 * additionalFormData - optional object which holds additional form data e.g.:
 *    {
 *      {postId: 3},
 *      {userId: 2}
 *    }
 * closeForm - optional function e.g. to close Modal
 * onSubmitForm - function executed on submit form e.g. adding a Post
 * formSubmitted - value to disable submit button while sending request (true or false)
 */
const addForm = props => {
  return (
    <div className={classes.AddForm}>
      <h3>{props.title}</h3>
      <Formik
        initialValues={props.fields.reduce((acc, curr) => ({ ...acc, [curr.name]: '' }), {})}
        validate={values => {
          let errors = {};
          if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          for (let key in values) {
            if (!values[key]) {
              errors[key] = `${key} is required`;
            }
          }
          return errors;
        }}
        onSubmit={(values) => {
          props.onSubmitForm({...values, ...props.additionalFormData})
        }}
      >
        <Form>
          {props.fields.map((item, index) => (
            <div className={classes.InputContainer} key={index}>
              <Field
                name={item.name}
                render={({ field }) => (
                  <label>
                    <span>{item.label}</span>
                    {item.type === 'textarea' ?
                      <textarea {...field} />
                      : <input {...field} type={item.type} />}
                  </label>
                )} />
              <ErrorMessage name={item.name} component="p" />
            </div>
          ))}

          <div className={classes.ButtonsContainer}>
            <Button type='reset' whiteButton clicked={() => props.closeForm()}>Cancel</Button>
            <Button type='submit' disabled={props.formSubmitted}>{!props.formSubmitted ? 'Save' : 'Loading...'}</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
};

export default addForm;