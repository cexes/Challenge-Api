const express = require('express');
const routes = express.Router();
const regiterUserController = require('../controllers/RegisterUser');

routes.get('/', (req, res) => {
    console.log("/")
});

routes.post('/register_user',( req ,res) => {
    const { complete_name, passoword, email, cpf } = req.body;
    new_user =  new  regiterUserController( complete_name, passoword, email, cpf)
} )

module.exports = routes;