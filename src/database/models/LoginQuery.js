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
       
       //Create bank account
      
       const insertAccountQuery = 'INSERT INTO account (user_id) VALUES ($1)';
       const bankac = await pool.query(insertAccountQuery, [userId])
       console.log(' USER CREATED WITH ACCOUNT ' );
   }
}

async function  InsertUserCompany(complete_name, password, email, cnpj) {   
  
     const exist_company =  await pool.query (' SELECT * FROM merchant_users WHERE email = $1 OR cnpj = $2',[email, cnpj]);
     
     if(exist_company.rows.length > 0) {
        return null;
     }else {
        const insert = await pool.query( 'INSERT INTO merchant_users (complete_name, password, email, cnpj ) VALUES ($1 , $2 , $3 , $4 )',[complete_name, password, email, cnpj] );
        console.log('user created');
      } 
    }


module.exports = { InsertUserConsumer, InsertUserCompany };
