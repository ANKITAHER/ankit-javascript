let myDate =  new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

let myCurrentdate = Date.now()
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay()+1);
console.log(newDate.getDay())


newDate.toLocaleString('default', {
    weekday : 'long'
})



// toString() : Sun May 07 2023 14:16:39
// toDateString() : Sun May 07 2023
// toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
// toLocaleString() : 5/7/2023, 2:20:24 PM
// toISOString() : 2023-05-07T09:21:22.167Z
// toUTCString() : Sun, 07 May 2023 09:24:48 GMT