const BankMerchant = require('../../src/controllers/BankControllerMerchantUsers');
const query = require('../../src/database/models/BankQuery');

jest.mock('../../src/database/models/BankQuery', () => ({
    ReturnBalanceByMerchantUser: jest.fn(), // Corrigido o nome da função para ReturnBalanceByMerchantUser
}));

describe('MerchantUsers', () => {
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

        it('should returno 500 on internal server error', async () => {
            const mockReq = { body: { email: 'empresa@example.com' } };
            const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            query.ReturnBalanceByMerchantUser(new Error('Database error'));

            await BankMerchant.CheckBalance(mockReq, mockRes);
            
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalledWith('Internal server error');

        });


        

    });
});
