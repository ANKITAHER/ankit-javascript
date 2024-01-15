const accountId = 123
var accountEmail = "ankit@google.com";
let accountPassword = "21324"
accountCity = "nashik"
let accountState;


//dont use var bcz issue of functional scope and blocked scope

// accountId = 1   const value does not change  

accountEmail = "anh@gmail.com"
accountPassword = "bdv"
accountCity = "mumbai"


console.log(accountId);  //  methos  for log  the value 
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])   //another methos  for  the  to  log  tyhe  all the  varibales  