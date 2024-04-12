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
   
}
async function CreateTableAccount() {
  try {
      const query_table_account = await pool.query(`
          CREATE TABLE Account (  
              id SERIAL PRIMARY KEY,
              balance NUMERIC(10, 2) NOT NULL DEFAULT 0,
              user_id INTEGER,
              user_merchant_id INTEGER,
              CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
              CONSTRAINT fk_user_merchant_id FOREIGN KEY (user_merchant_id) REFERENCES merchant_users(user_id)
          );  
      `);
      console.log(query_table_account);
      pool.end();
  } catch (error) {
      console.error(error);
  }
}
CreateTableUsers();
CreateTableMerchant();
CreateTableAccount(); 
