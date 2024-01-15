const city = ['nashik', 'pune' ,' mumbai']
const state = ['mh', 'mp' , 'rj']

// city.push(state)

// console.log(city)
// console.log(city [3][1])

// const allcitystate =city.concat(state)
// console.log(allcitystate)


const allnew = [...city , ...state]
console.log(allnew)

const anotherArray = [1,2,3,[1,,5,5,5], [4,5,6,7 [41,5,5,9]]]
const newAnotherArray = anotherArray.flat(Infinity)

console.log(newAnotherArray)

console.log(Array.isArray('ankit'))
console.log(Array.from('ankit'))
console.log(Array.from({name : 'ankit'}))


let score1 = 100
let score2 = 100
let score3 = 104

console.log(Array.of(score1 , score2 ,  score3))