import React from 'react';
import User from '../../../../../pages/Users/UsersList/User/User';
import { Link }  from 'react-router-dom';
import Button from '../../../../../components/UI/Button/Button';

describe('<User>', () => {
  const props = {
    user: {
      name:    'Chris',
      email:   'chris@gmail.com',
      phone:   '555666777',
      website: 'chris.com',
      id:      1,
      company: {
        name: 'Company',
        catchPhrase: 'catch phrase',
        bs: 'some bs'
      }
    }
  };
  const wrapper = shallow(<User {...props}/>);

  it('should render a "div" with a user details', () => {
    const userDiv = <div>
      <h2>Chris</h2>
      <p>Contact:</p>
      <ul>
        <li>email <a href="mailto:chris@gmail.com">chris@gmail.com</a></li>
        <li>phone: 555666777</li>
        <li>website: <a href="https://chris.com">chris.com</a></li>
      </ul>
      <p>Company:</p>
      <ul>
        <li>Company</li>
        <li>catch phrase</li>
        <li>some bs</li>
      </ul>
      <Link>
        <Button>Details</Button>
      </Link>
    </div>;

    expect(wrapper.containsMatchingElement(userDiv)).to.equal(true);
  });

  it('should render a "Link" with adequate pathname', () => {
    const link = wrapper.find(Link);

    expect(link.props().to.pathname).to.equal('/user/1');
  });
});