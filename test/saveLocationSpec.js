// Should not accept value outside decimal range
// Should accept value inside decimal range
// Should successfully add value
// Should return value previously added <----- Different spec?
// Should log errors

const CHAI = require('chai');
const CHAIHTTP = require('chai-http');

CHAI.use(CHAIHTTP);