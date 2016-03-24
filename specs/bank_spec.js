var assert= require('chai').assert;
var Bank = require('../bank.js');
var Account = require('../account.js');

var bank1 = new Bank('Gringotts Bank');

var account1 = new Account('Draco Malfoy', 7500, 'wizardary');
var account2 = new Account("Hagrid", 2300, 'ministerial');
var account3 = new Account("Hagrid", 140, 'muggle');

describe('bank', function(){

  it('should have a name', function(){
    assert.equal('Gringotts Bank', bank1.name)
  });

  it('should have an account holder which is empty', function(){
    assert.deepEqual([], bank1.accountsHolder)
  })

  it('should be able to add an account', function(){
    bank1.addAccount(account1)
    assert.deepEqual([account1], bank1.accountsHolder)
  });

  it('should return all accounts', function(){
    assert.deepEqual([account1], bank1.searchAccounts())
  });

  it('should search by name', function(){
    bank1.addAccount(account2)
    assert.deepEqual(account1, bank1.searchAccountsByName('Draco Malfoy'))
  });


});