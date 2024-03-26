const userQuery = require('../database/models/LoginQuery');

class RegisterUser {
    constructor(complete_name, password, email, cpf) {
        this.complete_name = complete_name;
        this.password = password;
        this.email = email;
        this.cpf = cpf;

         userQuery.InsertUserConsumer(this.complete_name, this.password, this.email, this.cpf);

    }
}


module.exports = RegisterUser;
