// primitive

// 7 types : String ,  number , null , undefined , symbol , bigint


//javascript  is  dynamically type lang 

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp =  null
let userEmail ;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 133011531815681815n



// reference or non-primitive 

//Array , Object , functions


const hero = ['ankit', 'ajinkya', 'kapil']

let myobject ={
    name: 'ankit',
    age: 22
}

const myFunction = function(){
    console.log('hello world')
}

console.log ( typeof scoreValue)



// Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)


// **************************memory*************************

// stack memory ( primitive)       heap memory ( non primitive)