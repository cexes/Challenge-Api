const query = require('../database/models/BankQuery');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

class BankUsers {
  static async CheckBalance(req, res) {
    try {
      const { email } = req.body;
      const balance = await query.ReturnBalance(email);

      if (balance !== undefined) {
        res.status(200).json({ balance });
        console.log(balance);
      } else {
        res.status(404).send('Balance not found for the specified email');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }

  static async AddValueOnBalance(req, res) {
    try {
      const { email, value } = req.body;
      await query.AddValueOnBalance(email, value);
      res.status(200).json("Balance updated");
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }

  static async TransactionBalance(req, res) {
    try {
        const { emailsender, emailReciver,  value } = req.body;
        const isAuthorized = await authorizationMiddleware(req, res);
        
        if (isAuthorized) {
          const result = await query.AddBalanceTransaction(emailsender, emailReciver, value);
          res.status(200).json("Balance $ " + result);
        } else {
          res.status(403).json({ error: "Transação não autorizada" });
        }
    } catch (error) {
        console.error(error);
        res.status(505).send('Internal server error');
    }
}

}

module.exports = BankUsers;
