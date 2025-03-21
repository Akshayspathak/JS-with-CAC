// ProtoType

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(` score is ${this.score}`);
};

const chai = new createUser("chai", 20);
const Tea = new createUser("tea", 300);

chai.printMe();
Tea.printMe();

createUser.prototype.showMe = function () {
  console.log(`This is the price of coffee is  ${this.score}`);
};
const price = new createUser("coffee", 500);

price.showMe();
