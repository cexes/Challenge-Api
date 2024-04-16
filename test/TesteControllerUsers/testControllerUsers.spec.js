const BankUsers = require('../../src/controllers/BankControllerUsers');
const query = require('../../src/database/models/BankQuery');

jest.mock('../../src/database/models/BankQuery', () => ({
  ReturnBalance: jest.fn(),
}));

describe('BankUsers.CheckBalance', () => {
  test('should return balance when it exists', async () => {
    const req = { body: { email: 'testuser@email.com' } };
    const res = {
      status: jest.fn().mockReturnThis(), 
      json: jest.fn(), 
      send: jest.fn(), 
    };

    const expectedBalance = 200;
    query.ReturnBalance.mockResolvedValue(expectedBalance);

    await BankUsers.CheckBalance(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ balance: expectedBalance });
  });




});
