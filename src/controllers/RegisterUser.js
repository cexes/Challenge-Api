const userQuery = require('../database/models/LoginQuery');

class RegisterUser {
    static async SaveNewUser(req, res) { 
        try {
            const { complete_name, password, email, cpf } = req.body;
            const userInserte = await userQuery.InsertUserConsumer(complete_name, password, email, cpf);
            
            if (userInserte) {
                res.status(201).send('User created successfully!');
            } else {
                res.status(400).send('User already exists with this email or CPF');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error'); 
        }
    }
}

module.exports = RegisterUser;
