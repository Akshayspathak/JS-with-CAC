// forEach & filter use

// const coding = ['js','ruby','java','cpp']

// const values = coding.forEach((item) => {
//     console.log(item);
    
// })

// console.log(values);  // new veriable values n0 return item



// const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNums.filter((num) =>{ return num <= 5})
// // console.log(newNums);  // new veriable return karta newNums 

// const myValue = myNums.filter((num)=> num <= 10)
// console.log(myValue);


// const number = [22,33,44,55,66,77,888,99,100]
// const newValue  = number.filter((item)=> item >=50)
// console.log(newValue);


// Ex

let books = [{ title:'Book One', genre: 'History', publish:2011, edition:1989, id:1},
    { title:'Book Two', genre: 'Science', publish:2005, edition:2011, id:2},
    { title:'Book Three', genre: 'Math', publish:1995, edition:2022,id:2},
    { title:'Book Four', genre: 'Math', publish:2016, edition:2024,id:2},]
let userBooks = books.filter((bk) => bk.genre ==='Science')
// console.log(userBooks);

// userBooks = books.filter((bks)=> bks.publish === 2011)
// // userBooks = books.filter((bkss)=> bkss.genre === 'Math')
// userBooks = books.filter((bk)=> bk.publish >= 2000)
userBooks = books.filter((bk)=>bk.id === 2 && bk.genre === "Science")
console.log(userBooks);
userBooks = books.filter((bk)=>bk.id === 1)
// console.log(userBooks);



