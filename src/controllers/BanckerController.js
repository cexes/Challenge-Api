class Bank {
  
  constructor(){
    
    this.balance = 150.0;
  
  };
   
  SendMoney(email, value) {
    this.balance -= value;
    console.log('send' + value + 'for' + email);
    console.log(this.balance);
    
    } 
  }


bb = new Bank();
bb.SendMoney('mottacesar001@gmail.com',50);
