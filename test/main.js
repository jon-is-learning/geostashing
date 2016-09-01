//for tests that don't fit into any other file
var chai = require('chai');
var should = chai.should();

describe('truth', function() {
  it('should pass this test', function() {
	  true.should.be.true;
	  false.should.be.false;
  });
});
