const BankUsers = require('../../src/controllers/BankControllerUsers');
const query = require('../../src/database/models/BankQuery');

jest.mock('../../src/database/models/BankQuery', () => ({
  ReturnBalance: jest.fn(),
  AddValueOnBalance: jest.fn(),
}));

describe('BankUsers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('CheckBalance', () => {
    it('should return balance when it exists', async () => {
      const mockReq = { body: { email: 'usertest@email.com' } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      query.ReturnBalance.mockResolvedValue(100);

      await BankUsers.CheckBalance(mockReq, mockRes);

      expect(query.ReturnBalance).toHaveBeenCalledWith('usertest@email.com');
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({ balance: 100 });
    });

    it('should return 404 if balance does not exist', async () => {
      const mockReq = { body: { email: 'usertest@email.com' } };
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      query.ReturnBalance.mockResolvedValue(undefined);

      await BankUsers.CheckBalance(mockReq, mockRes);

      expect(query.ReturnBalance).toHaveBeenCalledWith('usertest@email.com');
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.send).toHaveBeenCalledWith('Balance not found for the specified email');
    });

    it('should return 500 on internal server error', async () => {
      const mockReq = { body: { email: 'usertest@email.com' } };
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      query.ReturnBalance.mockRejectedValue(new Error('Database error'));

      await BankUsers.CheckBalance(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.send).toHaveBeenCalledWith('Internal server error');
    });
  });

  describe('AddValueOnBalance', () => {
    it('should add value to balance', async () => {
      const mockReq = { body: { email: 'usertest@email.com', value: 50 } };
      const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await BankUsers.AddValueOnBalance(mockReq, mockRes);

      expect(query.AddValueOnBalance).toHaveBeenCalledWith('usertest@email.com', 50);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith('Balance updated');
    });

    it('should return 500 on internal server error', async () => {
      const mockReq = { body: { email: 'usertest@email.com', value: 50 } };
      const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      query.AddValueOnBalance.mockRejectedValue(new Error('Database error'));

      await BankUsers.AddValueOnBalance(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.send).toHaveBeenCalledWith('Internal server error');
    });
  });
});