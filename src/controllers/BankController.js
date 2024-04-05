const query = require('../database/models/BankQuery')
class Bank { 

  constructor() {}

   CheckBallance(email) {
     query.ReturnBallance(email)
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



module.exports =  Bank ;
