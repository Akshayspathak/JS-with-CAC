

// const appUser2 = new Object()

const appUser = {}


appUser.id = "Adi123"
appUser.name = "Adi"
appUser.account = 12121212
// console.log(appUser);


const regularUser = {
    email: "Adi@gmail.com",
    fullname: {
        userfullname:{
            firstname:"ak",
            lastname: "pathak"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "A", 2: "B"}
const obj2 = {3:"C", 4:"D"}
const obj6 = {5:"F", 6:"G"}

// const obj4 = {obj1, obj2}
// console.log(obj4);


const obj3 = Object.assign({},obj1,obj2,obj6)
const obj7 = {...obj1,...obj2,...obj6}
console.log(obj7);

// console.log(obj3);


// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

