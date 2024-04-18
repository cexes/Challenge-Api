 const BankMerchant = require('../../src/controllers/BankControllerMerchantUsers');
 const query = require('../../src/database/models/BankQuery');

 jest.mock('../../src/database/models/BankQuery', ()=> ({
     ReturnBalance: jest.fn(),
     AddValueOnBalance: jest.fn(),
 }));

 describe('MerchantUsers',() => {
      afterEach(() => {
      jest.clearAllMocks();
     })
 });

 describe('CheckBalance',() => {
    it('should return balance when it exists', async () => {
        const mockReq = {body: { email: 'teste'}};
    })
 })

