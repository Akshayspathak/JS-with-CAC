// // Task

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('The Task in Complete');
//         resolve()
        
//     },2000)

// }).then(function(){
//     console.log('async Task resolve');
    
// })



// // task

// const myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('my Project is Completed');
//         resolve()
        
//     },5000)
// })

// myPromise.then(function(){
//     console.log('Final Done my Project After Long Time');
    
// })

// // task 3 

// const myNewProjeect = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('New Project by Samarth');
//         resolve()
        
//     }, 7000);
// })
// myNewProjeect.then(function(){
//     console.log('Comeing soon');
    
// })


// const myNewPro2 = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         console.log('New Promises with M');
//         resolve()
        
//     },10000)
// })

// myNewPro2.then(function() {
//     console.log('Thank you');
    
// })



// const mynewValue = new Promise(function(resolve , reject) {
//     setTimeout(function(){
//         console.log('This is the my new Amount');
//         resolve()
//     },2000)
// })

// mynewValue.then(function(){
//     console.log('My New Amount is INR ');
    
// })



// const myNewValue = new Promise(function( resolve, reject){
//     setTimeout(function(){
//         console.log('this is my new Value');
//         resolve()
//     },3000)
// })
// myNewValue.then(function(){
//     console.log('Thank You ');
// })

//****************************************************************************************/

//**************** Data in Promise *******************************************************/

// Task

// const myNewValue = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('This is the new Account');
        
//         resolve({user:'mia',age:22})
//     },2000)
// })
// myNewValue.then(function(l){
//     console.log(l);
    
// })

// Task 
// const myNewName = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('My New Name is');
//         resolve({nickName:"Aaku",age: 28})
//     },5000)
// })

// myNewName.then(function(data){
//     console.log(data);
    
// })


// Task

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error = true
//         if (!error) {
//             resolve({userName: 'Akshay', age:22})
//         } else {
//             reject('error Something went wrong')
//         }
//     },3000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     // return user.userName
//     return user.age
// }).then((userName)=>{
//    console.log(userName);
// }).catch((error)=> {
// console.log(error);
// }).finally(() => console.log('finally promises is done')
// )


// task


const myPromiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({userName: 'Akshay', sol:'Mia'})
        } else {  
            reject('Error: something error')
        }
    },2000)
})


async  function consumePromiseFive() {
    try {
        const respone = await myPromiseFive
        console.log(respone);
    } catch (error) {
        console.log(error);
        
        
    }
}

consumePromiseFive()

//************************* try catch using ******************************/

// async function getAllUser() {
//  try {
//     const respose = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await respose.json()
//     console.log(data);
    
//  } catch (error) {
//     console.log('E: error');
    
    
//  }
// }
// getAllUser()

/////////////////////// .then .catch using ////////////////////////////////////////


fetch ('https://jsonplaceholder.typicode.com/users')
.then((respose)=> {
    return respose.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> {
    console.log('error');
})


fetch('https://api.github.com/users/akshaypathak')
.then((respose) =>{
    return respose.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})