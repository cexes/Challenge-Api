const BankMerchant = require('../../src/controllers/BankControllerMerchantUsers');
const query = require('../../src/database/models/BankQuery');

jest.mock('../../src/database/models/BankQuery', () => ({
    ReturnBalanceByMerchantUser: jest.fn(),
    AddValueOnBalanceByMerchantUser: jest.fn(),
}));

describe('CheckBalance', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('CheckBalance', () => {
        it('should return balance when it exists', async () => {
            const mockReq = { body: { email: 'empresa@example.com' } };
            const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const mockedBalance = 100;
            query.ReturnBalanceByMerchantUser.mockResolvedValueOnce(mockedBalance); 
            
            await BankMerchant.CheckBalance(mockReq, mockRes);

            expect(query.ReturnBalanceByMerchantUser).toHaveBeenCalledWith('empresa@example.com');
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({ balance: mockedBalance }); 
        });

        it('should return 404 if balance does not exist', async () => {
            const mockReq = { body: { email: 'empresa@example.com' } };
            const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            query.ReturnBalanceByMerchantUser.mockResolvedValueOnce(undefined); 

            await BankMerchant.CheckBalance(mockReq, mockRes);

            expect(query.ReturnBalanceByMerchantUser).toHaveBeenCalledWith('empresa@example.com'); 
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.send).toHaveBeenCalledWith('Balance not found for the specified email');
        });

        it('should return 500 on internal server error', async () => {
            const mockReq = { body: { email: 'empresa@example.com' } };
            const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            query.ReturnBalanceByMerchantUser.mockRejectedValueOnce(new Error('Database error'));

            await BankMerchant.CheckBalance(mockReq, mockRes);
            
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalledWith('Internal server error');
        });
    });

    describe('AddValueOnBalance', () => {
        it('should add value to balance', async () => {
            const mockReq = { body: { email: 'empresa@example.com', value: 50 } };
            const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            await BankMerchant.AddValueOnBalance(mockReq, mockRes);

            expect(query.AddValueOnBalanceByMerchantUser).toHaveBeenCalledWith('empresa@example.com', 50);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith('Balance updated');
        });

        it('should return 500 on internal server error', async () => {
            const mockReq = { body: { email: 'empresa@example.com', value: 50 } };
            const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            query.AddValueOnBalanceByMerchantUser.mockRejectedValueOnce(new Error('Database error'));

            await BankMerchant.AddValueOnBalance(mockReq, mockRes);
            
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalledWith('Internal server error');
        });
    });
});
