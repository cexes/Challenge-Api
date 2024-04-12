const express = require('express');
const routes = express.Router();
const registerUserController = require('../controllers/RegisterUser');
const registerCompanyController = require('../controllers/RegisterCompany');
const bankController = require('../controllers/BankControllerUsers');
const bankControllerMerchant = require('../controllers/BankControllerMerchantUsers');


routes.post('/register_user', registerUserController.SaveNewUser);

routes.post('/register_company', registerCompanyController.SaveNewCompany);

routes.post('/check_balance_user', bankController.CheckBalance);

routes.post('/add_value_on_balance_user', bankController.AddValueOnBalance);

routes.post('/check_balance_merchant_user', bankControllerMerchant.CheckBalance);

routes.post('/add_value_on_balance_merchant_user',bankControllerMerchant.AddValueOnBalance);

module.exports = routes;
