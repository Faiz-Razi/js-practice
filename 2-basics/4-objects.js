// const tinderUser = new Object() // singleton

const tinderUser = {} // non-singleton

tinderUser.id = '123abc'
tinderUser.name = 'faiz'
tinderUser.isLogged = false

// console.log(tinderUser) // {}

const regUser = {
    email: 'some@test.com',
    fullName: {
        userFullName:{
            first_name: 'faiz',
            last_name: 'razi'
        }

    }
}

// console.log(regUser.fullName?.userFullName.first_name)

const obj1 = { 1: 'a', 2: 'b' }

const obj2 = { 3: 'c', 4: 'd' }

const obj5 = { 5: 'e', 6: 'f' }

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj6 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4 = Object.assign({}, obj1, obj2, obj5) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(obj6)

const users = [
    {
        id: 1,
        email: 'faiz@test.com'
    },
    {
        id: 2,
        email: 'fahad@test.com'
    },
    {
        id: 3,
        email: 'farooq@test.com'
    },
]

// console.log(users[0].email) // faiz@test.com

// console.log(tinderUser) // { id: '123abc', name: 'faiz', isLogged: false }

// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLogged' ]

// console.log(Object.values(tinderUser)) // [ '123abc', 'faiz', false ]

// console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'faiz' ], [ 'isLogged', false ] ]

// console.log(tinderUser.hasOwnProperty('isLogged')) // true

// Destructring

const course = {
    name: 'eng',
    price: 50,
    teacher: 'ali'
}

// console.log(course.teacher)

const {teacher: ustad} = course 

console.log(ustad)

{
    name: 'eng',
    price: 50,
    teacher: 'ali'
}

