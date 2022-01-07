

const sdk = require('api')('@clever-developers/v3.0#1mld74kq6wh8ht');

sdk.auth('TEST_TOKEN');
sdk.getCourse({id: '5970d4dd35e9e69741000160'})
  .then(res => console.log(res))
  .catch(err => console.error(err));