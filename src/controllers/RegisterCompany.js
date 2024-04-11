const queryRegister = require('../database/models/LoginQuery')

class RegisterCompany  {
    static async SaveNewCompany(req,res) {
		try {
			const { complete_name, password, email, cnpj } = req.body;
			const companyInsert = await queryRegister.InsertUserCompany(complete_name, password, email, cnpj);

			if(companyInsert) {
				res.status(201).send('User created successfully!');
			}else {
				res.status(400).send('User already exists with this email or CNPJ');
			}

		} catch (error) {
			console.log(error);
			res.status(500).send('Internal server error');
		}
	}

}

module.exports = RegisterCompany



