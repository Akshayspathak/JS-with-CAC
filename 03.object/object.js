// const mySym = Symbol("key1")

// let Jsuser = {
//     Name: "Adi",
//     fullName: "Adi Mule",
//     age: 22,
//     [mySym]: "key1",
//     account:212121212,
//     accountPassword:"Adi@123",
//     isloggedIn: false,
//     lastDay: ["Monday", "Sunday"]
// }

// // console.log(Jsuser["fullName"]);
// // console.log(Jsuser[mySym]);
// // console.log(Jsuser["isloggedIn"]);



// Jsuser.isloggedIn = true

// // console.log(Jsuser["isloggedIn"]);
// // console.log(Jsuser);
// // console.log(Jsuser[mySym]);


// Jsuser.greeting = function(){
//     console.log("Hello JS User");
    
// Jsuser.greeting2 = function(){
//     console.log(`Hello JS user, ${this.Name}`);
//     console.log(`Hello JS user, ${this.age}`);
    
// }
// }
// console.log(Jsuser.greeting());
// console.log(Jsuser.greeting2());


// Jsuser.get = function(){
//     console.log(`this is the part of Day ${this.lastDay}`);
    
// }
// console.log(Jsuser.get());



// const course = {
//     coursename: " JS ",
//     price: "999",
//     courseInstructor: "Akshay"
// }


// const {courseInstructor} = course
// console.log(courseInstructor);

// const {price} = course
// console.log(price);
// console.log(courseInstructor);
// console.log(price);

// de-Stucture

const obj = {
    account:"Akshay",
    accountid:121212123,
    accountPass: "YourName",
    userEmail: "Akshay@google.com"
}


const {account} = obj
console.log(account);

const{accountid} = obj
console.log(accountid);
console.log(accountid);
console.log(accountid);
console.log(accountid);
console.log(obj.userEmail);



// JSON Format API
// object format

{
    "name" : "AKSHAY",
    "price" : "free",
    "class" : "Online"

}

// JSON Format
//  Array format 
[
    {},
    {},
    {},
]