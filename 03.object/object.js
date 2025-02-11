const mySym = Symbol("key1")

let Jsuser = {
    Name: "Adi",
    fullName: "Adi Mule",
    age: 22,
    [mySym]: "key1",
    account:212121212,
    accountPassword:"Adi@123",
    isloggedIn: false,
    lastDay: ["Monday", "Sunday"]
}

// console.log(Jsuser["fullName"]);
// console.log(Jsuser[mySym]);
// console.log(Jsuser["isloggedIn"]);



Jsuser.isloggedIn = true

// console.log(Jsuser["isloggedIn"]);
// console.log(Jsuser);
// console.log(Jsuser[mySym]);


Jsuser.greeting = function(){
    console.log("Hello JS User");
    
Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.Name}`);
    console.log(`Hello JS user, ${this.age}`);
    
}
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


Jsuser.get = function(){
    console.log(`this is the part of Day ${this.lastDay}`);
    
}
console.log(Jsuser.get());

