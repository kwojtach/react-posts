import React from 'react';
import AddFormField from '../../../../components/AddForm/AddFormField/AddFormField';

describe('<AddFormField>', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      formField: {
        name:  'title',
        type:  'text',
        label: 'Title'
      }
    };

    wrapper = shallow(<AddFormField {...props}/>);
  });

  it('should render "Formik" "Fields" with "ErrorMessages"', () => {
    expect(wrapper.text()).to.equal('<FormikConnect(FieldInner) /><FormikConnect(ErrorMessageImpl) />');
  });
});