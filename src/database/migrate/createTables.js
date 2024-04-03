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
    const query_table_account = await pool.query (`
      CREATE TABLE Account  (  
      ID SERIAL PRIMARY KEY,
      BALANCE DECIMAL(10, 2) NOT NULL,
      user_id INTEGER NOT NULL,  
      user_merchant_id INTEGER,        
      FOREIGN KEY (user_id) REFERENCES users(user_id),  
      FOREIGN KEY (user_merchant_id) REFERENCES merchant_users(user_id)      
);  

   `
   )
    console.log(query_table_account);
pool.end();   
}
CreateTableUsers();
CreateTableMerchant();
CreateTableAccount(); 
