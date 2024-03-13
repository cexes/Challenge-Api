const pool = require("../database_config");


async function CreateTableUsers() {
    const query_table_users = await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      complete_name VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      cpf VARCHAR(11) NOT NULL
    );
  `);
    console.log(query_table_users);
}

async function CreateTableMerchant() {
    const query_table_company = await pool.query (`
    CREATE TABLE IF NOT EXISTS merchant_users(
       user_id SERIAL PRIMARY KEY,
       complete_name VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL, 
       cpnj VARCHAR(14) NOT NULL
    );
   `
   )
    console.log(query_table_company);
    pool.end()
   
}
CreateTableUsers();
CreateTableMerchant();