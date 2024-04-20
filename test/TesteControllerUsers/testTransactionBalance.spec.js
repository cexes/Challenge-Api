const BankUsers = require('../../src/controllers/BankControllerUsers');
const query = require('../../src/database/models/BankQuery');

jest.mock('../../src/database/models/BankQuery', () => ({
  AddBalanceTransaction: jest.fn(),
}));

describe('Transaction Balance Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should do a transaction between accounts', async () => {
    const mockReq = { body: { emailsender: 'usertest@email.com', emailReciver: 'empresa@example.com', value: 200 } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Configure o retorno do método AddBalanceTransaction para um objeto
    query.AddBalanceTransaction.mockResolvedValue({ message: 'Balance updated' });

    await BankUsers.TransactionBalance(mockReq, mockRes);

    expect(query.AddBalanceTransaction).toHaveBeenCalledWith('usertest@email.com', 'empresa@example.com', 200);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith('Transação feita');
    
  });

  it('should return an error if there is an error in AddBalanceTransaction', async () => {
    const mockReq = { body: { emailsender: 'usertest@email.com', emailReciver: 'empresa@example.com', value: 200 } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() };

    const error = new Error('Database error');
    query.AddBalanceTransaction.mockRejectedValue(error);

    await BankUsers.TransactionBalance(mockReq, mockRes);

    expect(query.AddBalanceTransaction).toHaveBeenCalledWith('usertest@email.com', 'empresa@example.com', 200);
    expect(mockRes.status).toHaveBeenCalledWith(505);
    expect(mockRes.send).toHaveBeenCalledWith('Internal server error');
  });
});
