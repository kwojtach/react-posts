import React from 'react';
import AddForm from '../../../components/AddForm/AddForm';
import Button from '../../../components/UI/Button/Button';
import { Formik, Form } from 'formik';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

describe('<AddForm>', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title: 'Add post',
      fields: [],
      additionalFormData: undefined,
      closeForm: () => {},
      onSubmitForm: () => {},
      formSubmitted: undefined
    };

    wrapper = shallow(<AddForm {...props}/>);
  });

  it('should render "h3" with text', () => {
    expect(wrapper.contains(<h3>Add post</h3>)).to.equal(true);
  });

  it('should render "Formik"', () => {
    expect(wrapper.containsMatchingElement(Formik)).to.equal(true);
  });

  it('should render "Form"', () => {
    expect(wrapper.containsMatchingElement(Form)).to.equal(true);
  });

  it('should render "Button" with reset type, Cancel text and "whiteButton" prop passed in', () => {
    expect(wrapper.containsMatchingElement(<Button whiteButton type='reset'>Cancel</Button>)).to.equal(true);
  });

  it('should call "closeForm" when reset type "Button" was clicked', () => {
    const mockOnClick = sinon.spy();
    wrapper.setProps({closeForm: mockOnClick});
    wrapper.find(Button).first().simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });

  it('should render "Button" with submit type and Save text', () => {
    expect(wrapper.containsMatchingElement(<Button type='submit'>Save</Button>)).to.equal(true);
  });

  it('should render disabled "Button" with submit type and Loading... text when "formSubmitted" is true', () => {
    wrapper.setProps({formSubmitted: true});

    expect(wrapper.containsMatchingElement(<Button disabled={true} type='submit'>Loading...</Button>)).to.equal(true);
  });
});