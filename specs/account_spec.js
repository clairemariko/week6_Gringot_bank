var assert= require('chai').assert;
var Account = require('../account.js');



var account1 = new Account('Harry James Potter', 5000, 'wizardary');
var account2 = new Account('Harry James Potter', 250, 'muggle');

describe('account', function(){

it('should have a owner name', function(){
  assert.equal('Harry James Potter', account1.name)
});

it('should have a balance', function(){
  assert.equal(5000, account1.balance)
});

it('should have a type', function(){
  assert.equal('wizardary', account1.type)
});

});