const express = require('express');
const routes = express.Router();
const registerUserController = require('../controllers/RegisterUser');
const registerCompanyController = require('../controllers/RegisterCompany');
const bankController = require('../controllers/BankControllerUsers');
const bankControllerMerchant = require('../controllers/BankControllerMerchantUsers');


routes.post('/register_user', registerUserController.SaveNewUser );
routes.post('/add_value_on_balance_user', bankController.AddValueOnBalance );
routes.get('/check_balance_user', bankController.CheckBalance );

routes.post('/register_company', registerCompanyController.SaveNewCompany );
routes.post('/add_value_on_balance_merchant_user', bankControllerMerchant.AddValueOnBalance );
routes.post('/transaction_balance', bankController.TransactionBalance);
routes.get('/check_balance_merchant_user', bankControllerMerchant.CheckBalance );


module.exports = routes;
