const user = {
     username : "ankit",
     price  : 225 ,

     welcomeMessage: function(){
        console.log(`${this.username} ,  this is my name`)
        // console.log(this)
     }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username = "ankit"
//     console.log(this.username)
// }

const chai = () =>{
    let username = "ankit"
    console.log(this)
}

// chai()

// const addTwo =  (num1 , num2) => {
//     return num1 + num2
// }

// implecet return
// const addTwo =  (num1 , num2) =>  (num1 + num2)
const addTwo =  (num1 , num2) =>  ({username : 'ankit'})
console.log(addTwo(3,4))
