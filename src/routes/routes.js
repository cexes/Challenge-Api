const express = require('express');
const routes = express.Router();
const registerUserController = require('../controllers/RegisterUser');
const registerCompanyController = require('../controllers/RegisterCompany');
const bankController = require('../controllers/BankController')

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
})

routes.post('/check_ballance',(req,res) => {
   const email = req.body.email;
   const bank = new bankController();
   bank.CheckBallance(email);
})

module.exports = routes;
