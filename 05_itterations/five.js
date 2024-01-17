const subject = ['marathi','english','maths']

// subject.forEach( function (val) {
//   console.log(val);
// })




// subject.forEach( (item) =>{
//     console.log(item);
// })




// function printMe(item){
//     console.log(item);
// }

// subject.forEach(printMe)


// subject.forEach((item, index,arr)=>{
//     console.log( item, index,arr);
// })


const mycoding = [
    {
        subject: 'marathi',
        student : 'a'
    },
    {
        subject: 'math',
        student : 'b'
    },
    {
        subject: 'english',
        student : 'c'
    },
    {
        subject: 'history',
        student : 'd'
    }
]


mycoding.forEach((item)=>{
    console.log(item.subject);
})