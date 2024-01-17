//for

for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element === 5){
        // console.log('5 is the best number ')
    }
    // console.log(element);

    
}


for (let i = 0; i <= 10;  i++) {
    // console.log(`outer lopp , ${i}`)
    for (let j = 0; j <= 10;  j++) {
    
        // console.log(`inner loop value , ${j} and inner loop ${i}`)
        
        // console.log(i + '*'+ j + '=' + i*j);
    }
    
}


const myarray = ['ankit','kapil' , 'ajinkya']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element)
}

// ***************************************** break and continue ******************************************************

// for (let index = 0; index <= 20 ; index++) {
//     if(index==5){
//         console.log('5 is detected ')
//         break;
//     } 
// console.log(`the value of i is , ${index}`)
    
// }

for (let index = 0; index <= 20 ; index++) {
    if(index==5){
        console.log('5 is detected ')
       continue;
    } 
console.log(`the value of i is , ${index}`)
    
}