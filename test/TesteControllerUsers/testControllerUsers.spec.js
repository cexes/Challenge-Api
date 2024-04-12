// Importe as dependências necessárias
const BankUsers = require('../../src/controllers/BankControllerUsers');



describe('CheckBalance', () => {
   test('should return balance when it exists', async ()=>{
       const email = 'testuser@email.com';
       const balance = 100;

       BankUsers.CheckBalance(email);
   })

});

//test('should return balance when it exists'