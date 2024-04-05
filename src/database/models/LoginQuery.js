const pool = require('../database_config');

async function InsertUserConsumer(complete_name, password, email, cpf ) {
      
  const exist = await  pool.query( 'SELECT * FROM users WHERE email = $1 OR cpf = $2 ',[ email , cpf]);     
   if ( exist.rows.length > 0 ) {
         return null;
   }else {

       const insertUserQuery = 'INSERT INTO users (complete_name, password, email, cpf) VALUES ($1, $2, $3, $4) RETURNING user_id';
       const userData = [complete_name, password, email, cpf];
       const newUser = await pool.query(insertUserQuery, userData); 
       const userId = newUser.rows[0].user_id;
       const insertAccountQuery = 'INSERT INTO account (user_id) VALUES ($1)';
       await pool.query(insertAccountQuery, [userId]);
       console.log(' USER CREATED WITH ACCOUNT ' );
   }
}

async function  InsertUserCompany(complete_name, password, email, cnpj) {   
  
     const exist_company =  await pool.query (' SELECT * FROM merchant_users WHERE email = $1 OR cnpj = $2',[email, cnpj]);
     
     if(exist_company.rows.length > 0) {
        return null;
     }else {

       const insertCompanyQuery = 'INSERT INTO merchant_users (complete_name, password, email, cnpj ) VALUES ($1 , $2 , $3 , $4 ) RETURNING user_id';
       const companyData = [complete_name, password, email, cnpj]; 
       const newCompany = await pool.query(insertCompanyQuery, companyData);
       const companyId = newCompany.rows[0].user_id;
       const insertAccountQuery = 'INSERT INTO account (user_merchant_id) VALUES ($1)';
       await pool.query(insertAccountQuery, [companyId]);
       console.log(' COMPANY CREATED WITH ACCOUNT ');
     } 
    }


module.exports = { InsertUserConsumer, InsertUserCompany };
