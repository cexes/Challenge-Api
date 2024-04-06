const query = require('../database/models/BankQuery')
class BankUsers { 

  constructor() {}

   CheckBalance(email) {
     query.ReturnBalance(email)
   }
  
  AddValueOnBalance(email, value) {
    query.AddValueOnBalance(email, value)
  }

  SendMoney(email, value) {
    this.balance -= value;
    console.log('send' + value + 'for' + email);
    console.log('R$'  + this.balance);
    
    } 
  }



module.exports =  BankUsers ;
