const query = require('../database/models/BankQuery')
class BankMerchantUsers { 

  constructor() {}

   async CheckBalance(email) {
    try{
     query.ReturnBalanceByMerchantUser(email);

   }catch(error){
     console.log(error);
   }
   } 
  AddValueOnBalance(email, value) {
    query.AddValueOnBalanceByMerchantUser(email,value)
  }

  
  }



module.exports =  BankMerchantUsers ;
