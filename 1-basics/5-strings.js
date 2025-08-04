const name = 'faiz'
const repCount = '100'

// console.log(name + " " + repCount) // don't use it outdated

// console.log(`Name = ${name} rep count is ${repCount}`) // String litterls

const gameName = new String('faiz-razi') // anotherway of declaring strings

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('n'))

// const newString = gameName.substring(5,9)
// console.log(newString) // razi

// const anotherString = gameName.slice(-5,9)
// console.log(anotherString) // -razi

// const newString1 = "  faiz  "
// console.log(newString1)
// console.log(newString1.trim())

// const url = "https://www.google.com/faiz%20razi"
// console.log(url.replace('%20','-'))
// console.log(url.includes('faiz'))// true

console.log(gameName.split('-'))// true