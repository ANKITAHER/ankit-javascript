//if

if(2 === "2"){
    console.log('execute')
}

// <,>,==,===,<=,>=,!=.!==

// const temp = 41

// if(temp === 41 ){
//     console.log('yes less than  50')
// } else {
//     console.log( 'greter  than  50')
// }




// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log( ` user power ,${power}`)
// }
// // console.log( ` user power ,${power}`)


// const balance  = 1000 

// if(balance > 500) console.log('test')

// if( balance < 500){
//     console.log( 'less than  500')
// } else if (balance < 750){
//     console.log( 'less than 750')
// } else if (balance < 900){
//     console.log( 'less than 900')
// } else {
//     console.log('less than 2000')
// }


const  userlogin = true
const debitCard = true
const loginemil = true
const logingoogle =  true

if(userlogin && debitCard){
    console.log("please buy product")
}


if( loginemil || logingoogle){
    console.log("log in")
}