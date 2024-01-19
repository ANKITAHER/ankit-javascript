//gererate random color 

const randomColor = function(){
    const hex = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i <6 ; i++) {
     color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// console.log(randomColor());
let intervalid  ;
const startChangingColor = function(){
if(intervalid){
    intervalid =  setInterval( changebackground , 1000)
}
  

    function changebackground(){
        document.body.style.backgroundColor = randomColor()
    }


}
const stopChangingColor = function(){
    clearInterval(  intervalid )
    intervalid = null
}


document.querySelector('#btn-start').addEventListener('click', startChangingColor)

document.querySelector('#btn-stop').addEventListener('click', stopChangingColor)