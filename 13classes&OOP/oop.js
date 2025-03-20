// function myUser(userName, loginCount, isLoggedIn) {
//   this.userName = userName;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;

// }
// const userOne = new myUser("Joh", 12, true);
// const userTwo = new myUser("Amar", 11, true);
// console.log(userOne);
// console.log(userTwo);

function Account(account, accountholder, bank, address) {
  this.account = account;
  this.accountholder = accountholder;
  this.bank = bank;
  this.address = address;
}
const user = new Account(1234567812345, "aman", "NearBank", "UK");
console.log(user);

function myValue(userName, age, password) {
  this.username = userName;
  this.age = age;
  this.password = password;
}

const value = new myValue("Aksim", 22, 212121212121);
console.log(value);

function isLoggedIn(userName, password) {
  this.userName = userName;
  this.password = password;
}

const loggedIn = new isLoggedIn("Simak", "Aksim");
console.log(loggedIn);
