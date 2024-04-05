const query = require('../database/models/BankQuery')
class Bank { 

  constructor() {}

   CheckBallance(email) {
     query.ReturnBallance(email)
   }
  
  AddValueOnBalance(value) {
    this.balance += value;
  }

  SendMoney(email, value) {
    this.balance -= value;
    console.log('send' + value + 'for' + email);
    console.log('R$'  + this.balance);
    
    } 
  }



module.exports =  Bank ;
