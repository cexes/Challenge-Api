const pool = require('../database_config');

async function ReturnBalance(email) {

  try{
   const balanceByUser = (
      `SELECT account.balance
       FROM users
       INNER JOIN account ON users.user_id = account.user_id
       WHERE users.email = '${email}';
     `);

     
   const query = await pool.query(balanceByUser);
   const balance = parseFloat(query.rows[0].balance);
    
   return balance;

  }catch(error){

    console.log(error);
    throw error;

  }
}

async function AddValueOnBalance(email, value) {

  try{
    
      const addValueBalance = `
      UPDATE account
      SET balance = balance + $2
      FROM users
      WHERE account.user_id = users.user_id
      AND users.email = $1;
  `;
  const query = await pool.query(addValueBalance, [email, value]);
  return true;

  }catch(error){
    console.log(error);
    throw error;
  }

}

async function ReturnBalanceByMerchantUser(email) {

 try{

  const balanceByMerchantUser = (
    `
    SELECT account.balance
    FROM merchant_users
    INNER JOIN account ON merchant_users.user_id = account.user_merchant_id
    WHERE merchant_users.email = '${email}';
    
   `);

   const query = await pool.query(balanceByMerchantUser)
   const balance = parseFloat(query.rows[0].balance);
   return balance;

  }catch(error){
    console.log(error);
    throw error;
  }
}
async function AddValueOnBalanceByMerchantUser(email, value) {
  try {
    const addValueBalance = `

      UPDATE account
      SET balance = balance + $2
      FROM merchant_users
      WHERE account.user_merchant_id = merchant_users.user_id 
      AND merchant_users.email = $1;
    `;

    

    const result = await pool.query(addValueBalance, [email, value]);
    console.log(result)
    if (result.rowCount === 1) {
      return true; 
    } else {
      return false; 
    }
  } catch(error) {
    console.error(error);
    throw error;
  }
}


module.exports = { ReturnBalance, AddValueOnBalance, ReturnBalanceByMerchantUser, AddValueOnBalanceByMerchantUser}