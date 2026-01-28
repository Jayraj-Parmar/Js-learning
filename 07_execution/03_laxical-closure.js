function bankAccount() {
  let balance = 1000;

  return {
    deposit: function (amount) {
      balance += amount;
      console.log("Deposited:", amount);
    },
    checkBalance: function () {
      console.log("Balance:", balance);
    },
  };
}

const myAccount = bankAccount();
myAccount.deposit(500);
myAccount.checkBalance(); // ?
