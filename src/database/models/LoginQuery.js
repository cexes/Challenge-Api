const pool = require('../database_config');

async function InsertUserConsumer(complete_name, password, email, cpf ) {
     const insert  = await pool.query( 'INSERT INTO users (complete_name, password, email, cpf ) VALUES ($1 , $2 , $3 , $4 )',[complete_name, password, email, cpf]);
     console.log(insert);
}

async function  InsertUserCompany(complete_name, password, email, cnpj) {
     const insert = await pool.query( 'INSERT INTO merchant_users (complete_name, password, email, cnpj ) VALUES ($1 , $2 , $3 , $4 )',[complete_name, password, email, cnpj] );
     console.log(insert)
    }


InsertUserConsumer("zezzao cleitao da massa", "asdfasdf","xzezao@emai.com", "12345678912");
//InsertUserCompany("César Henrique Motta de Oliveira","BLACK DIMMON KISS ", "mottacesar001@gmail.com", "12345678912345" )