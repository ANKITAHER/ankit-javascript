// for of  

// ["","",""]
// [{},{}{}]

const arr = [1,2,3,4,6,7]

for (const num of arr) {
    // console.log(num);
}

const greetings = 'ankit'

for (const greet of greetings) {
    // console.log(`my name  is  ${greet}`)
}

const map = new Map()
map.set('in' , "india")
map.set('usa' , "america")
map.set('fr' , "france")

// console.log(map)

for (const [key , value] of map) {
    console.log( key ,':' , value);
}