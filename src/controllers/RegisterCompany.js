const queryRegister = require('../database/models/LoginQuery')

class RegisterCompany  {
	constructor(complete_name, password, email, cnpj) {
		this.complete_name = complete_name
		this.password = password
		this.email = email
		this.cnpj = cnpj

    
		queryRegister.InsertUserCompany(this.complete_name, this.password, this.email, this.cnpj)    
    
	}

}

module.exports = RegisterCompany



