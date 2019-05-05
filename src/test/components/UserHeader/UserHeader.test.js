import React from 'react';
import {UserHeader} from '../../../components/UserHeader/UserHeader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

describe('<UserHeader>', () => {
  let props;
  let shallowedUserHeader;
  const userHeader = () => {
    if (!shallowedUserHeader) {
      shallowedUserHeader = shallow(
        <UserHeader {...props} />
      );
    }
    return shallowedUserHeader;
  };

  beforeEach(() => {
    props = {
      postDetails: undefined,
      loadingDeleting: undefined,
      buttonAction: undefined,
      history: { goBack: undefined },
      location:{state: { userName: 'Chris' }}
    };
    shallowedUserHeader = undefined;
  });

  it('should always render a "p" with "FontAwesomeIcon" and "span" with Back text', () => {
    const paragraph = userHeader().find('p');

    expect(paragraph.containsMatchingElement(<p><FontAwesomeIcon/><span>Back</span></p>)).to.equal(true);
  });

  it('should call "goBack" function when "p" was clicked', () => {
    const mockOnClick = sinon.spy();
    props.history.goBack = mockOnClick;
    userHeader().find('p').simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });

  it('should always render a "h2" with user name', () => {
    const userNameH2 = userHeader().find('h2');

    expect(userNameH2.containsMatchingElement(<h2>Chris</h2>)).to.equal(true);
  });

  it('should render "FontAwesomeIcon" to add a post when "postDetails" is undefined', () => {
    const addPostIcon = userHeader().find('[icon=\'plus-circle\']');

    expect(addPostIcon).to.have.length(1);
  });

  it('should call "buttonAction" function when "FontAwesomeIcon" to add a post was clicked', () => {
    const mockOnClick = sinon.spy();
    props.buttonAction = mockOnClick;
    userHeader().find('[icon=\'plus-circle\']').simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });

  it('should render "FontAwesomeIcon" to delete a post when "postDetails" is defined and "loadingDeleting" is false', () => {
    props.postDetails = true;
    props.loadingDeleting = false;
    const deletePostIcon = userHeader().find('[icon=\'times-circle\']');

    expect(deletePostIcon).to.have.length(1);
  });

  it('should call "buttonAction" function when "FontAwesomeIcon" to delete a post was clicked', () => {
    props.postDetails = true;
    props.loadingDeleting = false;
    const mockOnClick = sinon.spy();
    props.buttonAction = mockOnClick;
    userHeader().find('[icon=\'times-circle\']').simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });

  it('should render "span" with Deleting... text when "postDetails" is defined and "loadingDeleting" is true', () => {
    props.postDetails = true;
    props.loadingDeleting = true;
    const spanDeleting = userHeader().containsMatchingElement(<span>Deleting...</span>);

    expect(spanDeleting).to.equal(true);
  });
});