function sayMyName(){
    console.log('a');
    console.log('n');
    console.log('k');
    console.log('i');
    console.log('t');
}

// sayMyName()

// function addTwoNumber(number1 , number2){
//    console.log( number1 + number2)
// }


function addTwoNumber(number1 , number2){

//   let  result = number1 + number2
//   return result

    return number1 + number2
 }


const result = addTwoNumber(3,4)
// console.log("result :" , result)


function logIn(username = "sam"){

    if(!username){
       console.log("enter your name")
        return
    }
    return `${username} just log in  `
}
// console.log(logIn())
// console.log(logIn("ankit"))


function calculatePrice(va1 , val2 , ...num1){
   return num1
}

// console.log(calculatePrice(1,2,24 ,4 ,5))


const user = {
    name: "ankit",
    price : 123
}


function handleObject(anyObject){
    console.log(`my name is  ${anyObject.name} and price is  ${anyObject.price}`)
}