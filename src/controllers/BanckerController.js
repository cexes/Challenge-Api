class Bank {
  constructor() {
    this.balance = 0;
  }
   
  Deposit(value) {
    this.balance += value;
    console.log(this.balance);
  }
}

let bb = new Bank();
bb.Deposit(100.0);
