const express = require('express');
const routes = express.Router();
const registerUserController = require('../controllers/RegisterUser');
const registerCompanyController = require('../controllers/RegisterCompany');
const bankController = require('../controllers/BankControllerUsers');
const bankControllerMerchant = require('../controllers/BankControllerMerchantUsers');

routes.get('/', (req, res) => {
    console.log("/")
});

routes.post('/register_user',( req ,res) => {
    const { complete_name, password, email, cpf } = req.body;
    new_user =  new  registerUserController( complete_name, password, email, cpf )
});

routes.post('/register_company', (req,res) => {
    const { complete_name, password, email, cnpj } = req.body;
    new_merchant = new registerCompanyController(complete_name, password, email, cnpj)
});

routes.post('/check_balance_user',(req,res) => {
   const email = req.body.email;
   const bank = new bankController();
   bank.CheckBalance(email);
});

routes.post('/add_value_on_balance_user', (req, res) => {
    const { email, value } = req.body;
    const bank = new bankController();
    bank.AddValueOnBalance(email,value)
});

routes.post('/check_balance_merchant_user',(req,res) => {
    const email = req.body.email;
    const bank = new bankControllerMerchant();
    bank.CheckBalance(email);
 });

 routes.post('/add_value_on_balance_merchant_user', (req, res) => {
    const { email, value } = req.body;
    const bank = new bankControllerMerchant();
    bank.AddValueOnBalance(email,value)
});

module.exports = routes;
