const query = require('../database/models/BankQuery')
class BankUsers { 

  constructor() {}

   CheckBalance(email) {
    try {
      
      query.ReturnBalance(email);

    } catch (error) {
       console.log("err to very the balance",error.message);
    }
     
   }
  
  AddValueOnBalance(email, value) {
    query.AddValueOnBalance(email, value)
  }

  SendMoney(email, value) {
    this.balance -= value;

    
    } 
  }



module.exports =  BankUsers ;
