const db = require('../models/db');
const Location = require('../models/locationModel');
const User = require('../models/userModel');

const force = process.argv.includes('--force');
const fixtures = process.argv.includes('--fixtures');

console.log('SYNCING', force
  ? 'FORCEFULLY'
  : 'NON-FORCEFULLY');

Promise.resolve().then(() =>
  console.log('SYNCING USER SCHEMA')
).then(() =>
  User.sync({ force })
).then(() =>
  console.log('SYNCING LOCATION SCHEMA')
).then(() =>
  Location.sync({ force })
).then(() =>
  fixtures || Promise.reject()
).then(() =>
  console.log('ADDING FIXTURES...')
).then(() =>
  console.log('CREATING LOCATIONS')
).then(() =>
  Location.bulkCreate([
    {
      name: 'Jon\'s Test Location',
      lat: 123.456789,
      lng: 123.456789,
      userId: 'df00ade3-bd8e-427d-8538-89f0b663dc00'
    },
    {
      name: 'Hack Reactor',
      lat: 37.7840795,
      lng: -122.4087025,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'Daly City',
      lat: -122.47077941894531,
      lng: 37.685926005279256,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'Golden Gate Park',
      lat: -122.48619675636292,
      lng: 37.76934030550184,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'red car',
      lat: -122.51358345150948,
      lng: 37.778245414078015,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'blue car',
      lat: -122.51356467604637,
      lng: 37.77821093578836,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'silver car',
      lat: -122.51354724168777,
      lng: 37.77817945559682,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'black car',
      lat: -122.51353248953819,
      lng: 37.77814797539187,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'white car',
      lat: -122.5134989619255,
      lng: 37.77808801305965,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'second red car',
      lat: -122.51348555088043,
      lng: 37.77804004315883,
      userId: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    }
  ])
).then(() =>
  console.log('CREATING USERS')
).then(() =>
  User.bulkCreate([
    {
      name: 'testOne',
      id: '216d00fa-e94c-4d41-83b4-95dc57d11052'
    },
    {
      name: 'testTwo',
      id: 'df00ade3-bd8e-427d-8538-89f0b663dc00'
    }
  ])
).then(() => db.close()
).catch(() => db.close());
