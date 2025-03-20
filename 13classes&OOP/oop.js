// function myUser(userName, loginCount, isLoggedIn) {
//   this.userName = userName;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;

// }
// const userOne = new myUser("Joh", 12, true);
// const userTwo = new myUser("Amar", 11, true);
// console.log(userOne);
// console.log(userTwo);

function myAccount(account, accountholder, bank, address) {
  this.account = account;
  this.accountholder = accountholder;
  this.bank = bank;
  this.address = address;
}
const user = new myAccount(1234567812345, "aman", "NearBank", "UK");
console.log(user);
