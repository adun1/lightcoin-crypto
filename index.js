class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
    // this.transactions = [];

  }

  /*
  get balance() {
    //calculate the balance using the transaction objects
    let total = 0;
    for(const item of this.transactions){
      total += item.amount
    }
    return total;

  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  */
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  /*
  commit(){
    if(this.isAllowed()){
      //keep track of the time of the transaction
      this.time = new Date();
      //add the transaction to the accont
      this.account.addTransaction(this);
      console.log(`Commit this = ${this}`);
    }
  }
  */
  commit() {
    this.account.balance += this.value;
  }
}


class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('brian');
const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance);

const t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance);

