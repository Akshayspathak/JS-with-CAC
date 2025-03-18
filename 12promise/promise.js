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

const myNewValue = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('This is the new Account');
        
        resolve({user:'mia',age:22})
    },2000)
})
myNewValue.then(function(l){
    console.log(l);
    
})

// Task 
const myNewName = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('My New Name is');
        resolve({nickName:"Aaku",age: 28})
    },5000)
})

myNewName.then(function(data){
    console.log(data);
    
})