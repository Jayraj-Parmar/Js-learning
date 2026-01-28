// https:www.geeksforgeeks.org/javascript/encapsulation-in-javascript

// using closure

function BankAccount(accountNumber, accountHolderName, balance) {
  let _accountNumber = accountNumber;
  let _accountHolderName = accountHolderName;
  let _balance = balance;

  function showAccountDetails() {
    console.log(`Account Number: ${_accountNumber}`);
    console.log(`Account Holder Name: ${_accountHolderName}`);
    console.log(`Balance: ${_balance}`);
  }

  function deposit(amount) {
    _balance += amount;
    showAccountDetails();
  }

  function withdraw(amount) {
    if (_balance >= amount) {
      _balance -= amount;
      showAccountDetails();
    } else {
      console.log("Insufficient Balance");
    }
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
  };
}

let myBankAccount = BankAccount("123456", "John Doe", 1000);

myBankAccount.deposit(500);
// Output: Account Number: 123456 Account Holder Name:
//John Doe Balance: 1500

myBankAccount.withdraw(2000); // Output: Insufficient Balance

// console.log(myBankAccount._balance); // Not allow

console.log(
  "===========================Not Expected================================",
);
// like another language
class BankAccount1 {
  constructor(acc_no, name, balance) {
    this.account_no = acc_no;
    this.accountHolder_name = name;
    this._balance = balance;
  }

  showAccountDetails() {
    console.log("--------------------------------");
    console.log(`| Account Number: ${this.account_no}`);
    console.log(`| Account Holder Name: ${this.accountHolder_name}`);
    console.log(`| Balance: ${this._balance}`);
    console.log("--------------------------------");
  }

  withdraw(amount) {
    if (this._balance < amount) {
      console.log("-----Insufficient Balance-----");
      return;
    }
    this._balance -= amount;
    this.showAccountDetails();
  }

  deposit(amount) {
    this._balance += amount;
    this.showAccountDetails();
  }
}
const myBankAccount1 = new BankAccount1(420045157, "Jayraj", 1000);
myBankAccount1.deposit(100);
myBankAccount1.withdraw(5000);
// console.log(myBankAccountNew._balance); // we can fetch it outside of the class, it's only like change name of variable

console.log("===========================Finally=============================");
class BankAccount2 {
  #balance;
  constructor(acc_no, name, balance) {
    this.account_no = acc_no;
    this.accountHolder_name = name;
    this.#balance = balance;
  }

  showAccountDetails() {
    console.log("--------------------------------");
    console.log(`| Account Number: ${this.account_no}`);
    console.log(`| Account Holder Name: ${this.accountHolder_name}`);
    console.log(`| Balance: ${this.#balance}`);
    console.log("--------------------------------");
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      console.log("-----Insufficient Balance-----");
      return;
    }
    this.#balance -= amount;
    this.showAccountDetails();
  }

  deposit(amount) {
    this.#balance += amount;
    this.showAccountDetails();
  }
}
const myBankAccount2 = new BankAccount1(420045157, "Jayraj", 1000);
myBankAccount1.deposit(100);
myBankAccount1.withdraw(5000);
// console.log(myBankAccountNew.#balance); // Not access -SyntaxError
