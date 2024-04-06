const query = require('../database/models/BankQuery')
class BankMerchantUsers { 

  constructor() {}

   CheckBalance(email) {
     query.ReturnBalanceByMerchantUser(email);
   }
  
  AddValueOnBalance(email, value) {
    query.AddValueOnBalanceByMerchantUser(email,value)
  }

  SendMoney(email, value) {
    this.balance -= value;
    console.log('send' + value + 'for' + email);
    console.log('R$'  + this.balance);
    
    } 
  }



module.exports =  BankMerchantUsers ;
