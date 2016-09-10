import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import SignIn from './../client/Components/SignIn';
import Product from './../client/Components/Product';

const product = {
    "name": "package",
    "price": 4.2,
    "description": "just your every day package, nothing to see here",
    "seller": { name: 'exampleName' },
    "location": {
      name: 'testLoc',
      lng: '123.456789',
      lat: '123.456789'
    },
};

// You need to fully render stateful components with mount
describe('Full DOM Render <SignIn />', () => {
  it('should be a form', () => {
    const wrapper = mount(<SignIn />);

    // Once the component is rendered, we can make sure it contains a form
    expect(wrapper.find('form')).to.have.length(1);
  });
});

// You can use shallow on stateless components
describe('Shallow Render <Product />', () => {
  it('should have return a value with html()', () => {
    // You can also pass props in when rendering with enzyme
    const wrapper = shallow(<Product info={product} />);


    // Find will work, but contains will not
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.contains('img')).to.be.false;
    // Contains looks for React elements
    // Find uses an enzyme selector:
    // http://airbnb.io/enzyme/docs/api/selector.html
  });
});

