const myNums = [1,2,3]

// const myTotal = myNums.reduce( function ( acc , currval) {
//     console.log(`my ${acc} value and  my ${currval}`);
//     return acc + currval
// },0)


const myTotal =  myNums.reduce( (acc ,  currval) => acc + currval , 0)

console.log(myTotal);