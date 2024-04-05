const pool = require('../database_config');

async function SelectAll () { 
  const select = 'SELECT * FROM account;'
  const query = await pool.query(select);
  console.log(query.rows);

} 

async function ReturnBallance(email) {
   const balanceByUser = (
      `SELECT account.balance
       FROM users
       INNER JOIN account ON users.user_id = account.user_id
         WHERE users.email = '${email}';
     `);
   const query = await pool.query(balanceByUser)
   console.log(query.rows[0].balance);
}

module.exports = { ReturnBallance}
