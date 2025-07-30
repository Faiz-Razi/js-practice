// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol,  BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null // object

let userEmail; // undefined
let userMail = undefined // also undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false
console.log(id) // Symbol(123)
console.log(anotherId) // Symbol(123)

const bigNum = 12345678900987654321n

// Reference (Non Primitive)

// Array, Objects, Functions

const list = ['a', 'b', 'c'] //Array

let myObj = {
    name: 'faiz',
    age: '35',
    city: 'riyadh'
}

const myFun = function(){ // function
    console.log('Im Function')
}

console.log(typeof myObj)

