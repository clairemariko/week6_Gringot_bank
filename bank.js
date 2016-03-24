
var bank = function(name){
  this.name = name;
  this.accountsHolder = [];
};



bank.prototype={
      addAccount: function(account){
        this.accountsHolder.push(account)
      },
      searchAccounts: function(){
        var tempHolder = []
        this.accountsHolder.forEach(function(account){
          tempHolder.push(account)
        })
        return tempHolder
      },
      searchAccountsByName: function(name){
        var tempHolder = this.searchAccounts();
        var result 
        tempHolder.forEach(function(account){
          if (account.name === name) {
              result = account
           } else {
          return "no accounts by that name"
          }
        })
        return result //MAKE SURE THIS IS OUTSIDE THE INNER FUNCTION OR IT WONT EXIT OUT AND RETURN THE RESULT
      }


};
module.exports = bank