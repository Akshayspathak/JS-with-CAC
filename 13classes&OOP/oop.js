function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
}
const userOne = new User("Joh", 12, true);
const userTwo = new User("Amar", 11, true);
console.log(userOne);
console.log(userTwo);
