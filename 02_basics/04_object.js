// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "ankit"
tinderUser.isLogin= false

// console.log(tinderUser);

const newUser = { 
    email : "some@gmail.com",
    fullName: {
        userFullName : {
            firstname: "ankit",
            lastname : "aher"
        }
    }
}


// console.log(newUser.fullName);

const obj1 = { 1:"a", 2:"b" }
const obj2 = { 3:"c", 4:"d" }

// const object3 = Object.assign( {}, obj1 , obj2)
const object3 = { ...obj1 , ...obj2}


// console.log(object3);

const users = [
    {
        name : "ankit",
        email: "anki@gmail.com"
    },
    {
        name : "ankit",
        email: "anki@gmail.com"
    },
    {
        name : "ankit",
        email: "anki@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("islogin"))

const course = {
    name : "angular",
    price  : "1000",
    tech : " javascript"
}

// course.tech

const{tech : m} = course
console.log(m )