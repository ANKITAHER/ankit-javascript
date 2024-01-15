//object literals


const sym = Symbol("key1")

const myObject = {
    name : 'ankit',
    [sym]: "mykey1",
    "full name" : "ankit aher",
    age : 22,
    email : "ankit@gmail.com",
    isLogIn : false,
    lastLognIn : ['monday', 'friday']
}

// console.log(myObject.email);
// console.log(myObject["email"]);
// console.log(myObject["full name"]);
// console.log(myObject[sym]);

myObject.email = "ndb@gmail.com"
// Object.freeze(myObject)
myObject.email = "ndbgcffv@gmail.com"
// console.log(myObject)


myObject.greeting = function(){
    console.log("hello ankit")
}


myObject.greetingTwo = function(){
    console.log(`hello  ${myObject.name}` )
}


console.log(myObject.greeting())
console.log(myObject.greetingTwo())
