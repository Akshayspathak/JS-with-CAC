// Reduce

// const mynums = [1,2,3,4]

//   const myTotal = mynums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${cur}`);
    
//     return acc + currval
//   },0)

//   console.log(myTotal);
  

// const myNums = [1,2,3,4,5,6,7,8]
// const myTotal = myNums.reduce((acc,crrs)=> acc + crrs,2)
// console.log(myTotal);


// const myValue = [11,12,23,34,56,77]
// myValue.reduce((acc,val)=> acc + val, 1)
// console.log(myValue);


// Task

const shoppingCart = [
    {
        itemname:"Js",
        price: 999
    },
    {
        itemname:"Cpp",
        price: 599
    },
    {
        itemname:"React",
        price: 1999
    },
    {
        itemname:"HTML",
        price: 999
    },
    {
        itemname:"CSS",
        price: 1299
    },
]

const priceCart =  shoppingCart.reduce((acc, item) => acc + item.price , 0 )
console.log(priceCart);


