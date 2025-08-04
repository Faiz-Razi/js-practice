// Singleton constructor say banta hai 

// Object.create is the way to create singleton

// Object Literals

const mySymbol = Symbol('key1')

const jsUser = {
    name: 'faiz',
    'second name': 'razi',
    [mySymbol] : 'whatever',
    age: 35,
    city: 'riyadh',
    isLogged: false,
    lastLogged: ['Mon', 'Sun']
}

// console.log(jsUser.name)
// console.log(jsUser['second name'])
// console.log(jsUser[mySymbol])

// jsUser.name = 'farooq'

// console.log(jsUser.name)

// Object.freeze(jsUser) // lock it 

// jsUser.name = 'burak'

// console.log(jsUser.name)

jsUser.greet = function(){
    console.log('Hi, Faiz')
}

jsUser.greet2 = function(){
    console.log(`Hi, ${this.name}`)
}

console.log(jsUser.greet())
console.log(jsUser.greet2())


