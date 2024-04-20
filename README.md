# API summary

This API was developed to provide user and company registration functionalities, as well as banking operations such as adding value to balance, checking balance and carrying out transactions.

## Functionalities

- **User Registration:** Allows new users to register on the platform.

- **Company Registration:** Enables the registration of new companies on the platform.

- **User Banking Operations:**
   - Add Amount to Balance: Adds a specific amount to a user or company's balance.
   - Check Balance: Returns the current balance of a user and company.
   - Perform Transactions: Allows a user to make transactions for other user and company accounts.

- **Company Banking Operations:**
   - Add Amount to Balance: Adds a specific amount to a company's balance.
   - Check Balance: Returns the current balance of a company.

## API Usage

### User Registration

```http
POST /register_user
Content-Type: application/json

{
   "complete_name": "Full Name",
   "password": "password123",
   "email": "usuario@example.com",
   "cpf": "12345678901"
}
````
### Add Value to User Balance

POST /add_value_on_balance_user
Content-Type: application/json
```http
{
  "email": "usuario@example.com",
  "value": 100
}

````
### Check User Balance

```http
GET /check_balance_user?email=usuario@example.com

```
### Carry out Transaction

```http

POST /transaction_balance
Content-Type: application/json

{
   "emailsender": "user1@example.com",
   "emailReciver": "usuario2@example.com",
   "value": 50
}

```

### Company Registration

```http

POST /register_company
Content-Type: application/json

{
   "company_name": "Company Name",
   "cnpj": "12345678000101"
}


```
### Add Value to Company Balance




```http

POST /add_value_on_balance_merchant_user
Content-Type: application/json

{
   "email": "company@example.com",
   "value": 500
}


```

### Check Company Balance



```http

GET /check_balance_merchant_user?email=empresa@example.com


```









