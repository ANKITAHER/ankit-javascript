let a = 300  // global scope

if(true){
   let a = 30 
   let b = 10

//    console.log("inner:" , a)  //local scope
}

// console.log(a)

function one(){
   const  username = "ankit"

   function two(){
    const website = " youtube"
    console.log(username);
   }

//    console.log(website);
   two()

}

// one()


if(true){
    const username = " ankit"
    if(username === " ankit"){
        const website = " youtube"
        // console.log( username + website)
    }
    // console.log(website)
}

// console.log(username)


//########################## intresting ###########################

console.log(addOne(5))

function addOne(num){
    return num +1
}

addTwo(8)
const addTwo = function(num){
    return num +1
}

