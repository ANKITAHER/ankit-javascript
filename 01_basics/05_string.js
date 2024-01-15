const name = "ankit"
let age =22

console.log(`my name is  ${name} , and my age  is  ${age}`)


const gameName = new String('ankit')
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))



const newString = gameName.substring(-8 , 4)
console.log(newString);


const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);



const anotherString1 = '     ankit'
console.log(anotherString1.trim());
console.log(anotherString1);



const url = 'https://cautious-guide-76g7pvpq6xpcp4pj.github.dev/'
console.log(url.replace('dev', '20'))