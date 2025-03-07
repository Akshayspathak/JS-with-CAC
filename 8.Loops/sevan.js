//  map

// const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumers.map((num) => num*10)
// console.log(newNum);

// const newNums = myNumers.filter((num)=> num >= 5)
// console.log(newNums);


// chain

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num >=50).map((num)=>num+1)
console.log(newNums);
