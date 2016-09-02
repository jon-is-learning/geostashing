//for tests that don't fit into any other file
const chai = require('chai');

chai.should();

describe('truth', () => {
  it('should pass this test', () => {
    true.should.be.true;
    false.should.be.false;
  });
});
