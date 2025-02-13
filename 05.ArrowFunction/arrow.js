// const user = {
//     userName: "Akshay",
//     price: 9990,

// }

// console.log(user.userName);
// console.log(user.price);


// //*********************************************** Arrow Function***/


// const addtwo = (num1, num2) => (num1 + num2)
// console.log(addtwo(2,2));



// const userName = (user) => ({user:"Aaku"})
// console.log(userName());

// const account = (Id) => ({Id:"ADI"})
// console.log(account());

// const email = (emailId) => ({emailId:"Akshay@google.com"})
// console.log(email());





// const pass = (password) => ({password:"akshay@123"})
// console.log(pass());


// const hello = (name) => ({name:"hello Akshay"})
// console.log(hello());

// const addNumber = (num1,num2) => (num1 + num2)
// console.log(addNumber(2,3));




// const accountNumber = (number) => ({number:"121212121"})
// console.log(accountNumber());

// const div = (num1,num2) => (num1 / num2)
// console.log(div(2,2));

// const sum = (num1,num2) => (num1 + num2)
// console.log(sum(1,2));

// const mul = (num1, num2) => (num1 * num2)
// console.log(mul(1,2));

// const user = (userName) => ({Name:"Aaku"})
// console.log(user());


// const addtwoValue =  (num1,num2) =>(num1 + num2)
// console.log(addtwoValue(2,2));


// const accountId = (id) => ({id:"121212123"})
// console.log(accountId());




// ************************ this **************



const user = {
    userName: "Adi",
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMsg()
// user.userName = "AAku"
// user.welcomeMsg()
// console.log(this);




// function chai() {
// console.log(this);
    
// }
// chai()

// ************ Arrow Function ***********



const addTwoNumber = (num1,num2) => (num1 + num2)
console.log(addTwoNumber(2,2));

const addTwoNumber2 = (num1, num2) => (num1 * num2)
console.log(addTwoNumber2(2,2));

const user1 = (username) => ({name:"Aaku"})
console.log(user1());

const account = (id) => ({id:"1212123"})
console.log(account());

const accountEmail = (userEmail) => ({ email:"Hc@google.com"})
console.log(accountEmail());

const accountpassword = (password) => ({password:"userName"})
console.log(accountpassword());

const Branch = (SBI) => ({SBI: "Abad"})
console.log(Branch());

