import React            from 'react';
import { Formik, Form } from 'formik';

import Button       from '../UI/Button/Button';
import AddFormField from './AddFormField/AddFormField';
import classes      from './AddForm.module.scss';

import { initialValues, validate } from './AddFormField/validateForm';

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

const AddForm = props => {
  const {
    title,
    fields,
    additionalFormData,
    closeForm,
    onSubmitForm,
    formSubmitted
  } = props;

  const onSubmit = values => onSubmitForm({...values, ...additionalFormData});

  return (
    <div className={classes.AddForm}>
      <h3>{title}</h3>
      <Formik
        initialValues ={initialValues(fields)}
        validate      ={validate}
        onSubmit      ={onSubmit}
      >
        <Form>
          {fields.map(formField =>
            <AddFormField
              formField ={formField}
              key       ={formField.name}
            />
          )}

          <div className={classes.ButtonsContainer}>
            <Button type='reset' whiteButton onClick={closeForm}>Cancel</Button>
            <Button type='submit' disabled={formSubmitted}>{!formSubmitted ? 'Save' : 'Loading...'}</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
};

export default AddForm;
