import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SignIn from './../client/Components/SignIn';

describe('<SignIn />', () => {
  it('should be a form', () => {
    const wrapper = shallow(<SignIn />);

    expect(wrapper.find('form')).to.have.length(1);
  });
});

