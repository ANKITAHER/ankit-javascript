const useremail = []

if ( useremail) {
    console.log("log in ")
} else {
    console.log( "not login ")
}



//falsy value

// false ,  0 ,-0,bigInt 0n, "",null,undefined , nan


//truthy values
// "0", "false"," ", {},[] , function(){}

if(useremail.length === 0){
    console.log('empty')
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("objet is empty")
}

// **********************************nullish coalescing operator ******************************

let val1;
//  val1 = 5?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 10
  val1 = null ?? 10 ??20

console.log(val1)


//*****************************************ternieary operator************************************************************** 
// condition ? true:false

const icetea = 100
icetea >= 80 ? console.log('price') : console.log( 'not price ')