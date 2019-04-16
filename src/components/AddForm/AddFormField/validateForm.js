export const initialValues = fields => fields.reduce((acc, curr) => ({ ...acc, [curr.name]: '' }), {});

export const validate = values => {
  const errors = {};
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  for (const key in values) {
    if (!values[key]) {
      errors[key] = `${key} is required`;
    }
  }
  return errors;
};
