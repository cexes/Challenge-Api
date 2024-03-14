const userQuery = require('../database/models/LoginQuery');

class RegisterUser {
    constructor(complete_name, passoword, email, cpf) {
        this.complete_name = complete_name;
        this.passoword = passoword;
        this.email = email;
        this.cpf = cpf;

        userQuery.InsertUserConsumer(this.complete_name, this.passoword, this.email, this.cpf);
    }
}


module.exports = RegisterUser;
