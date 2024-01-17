
// Immediately Invoked Function Expressions IIFE

(function chai(){
    console.log('db connected')
})();

( (name) =>{
    console.log(`db connected fefrv, ${name}`)
})('ankit')


// chai()