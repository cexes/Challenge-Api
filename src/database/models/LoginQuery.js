const pool = require('../database_config');

async function InsertUserConsumer(complete_name, password, email, cpf ) {
      
  const exist = await  pool.query( 'SELECT * FROM users WHERE email = $1 OR cpf = $2 ',[ email , cpf]);     
       //const insert  = await pool.query( 'INSERT INTO users (complete_name, password, email, cpf ) VALUES ($1 , $2 , $3 , $4 )',[complete_name, password, email, cpf]);
       console.log(exist.rows);

}

async function  InsertUserCompany(complete_name, password, email, cnpj) {
     const insert = await pool.query( 'INSERT INTO merchant_users (complete_name, password, email, cnpj ) VALUES ($1 , $2 , $3 , $4 )',[complete_name, password, email, cnpj] );
     console.log(insert)
    }


module.exports = { InsertUserConsumer, InsertUserCompany };
