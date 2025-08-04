const array = ['a','b','c']

const array2 = ['d','e','f']

// array.push(array2)

// console.log(array) // [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]

// console.log(array[3]) // [ 'd', 'e', 'f' ]

// console.log(array[3][1]) // e
 
// const array3 = array.concat(array2)

// console.log(array3) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// const array4 = [...array, ...array2]

// console.log(array4) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// const array5 = [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

// const array6 = array5.flat() // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

// const array7 = array5.flat(Infinity) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(array7) // 

// console.log(Array.isArray('Faiz')) // false

// console.log(Array.from('Faiz')) // [ 'F', 'a', 'i', 'z' ]

// console.log(Array.from({ name: 'faiz' })) // [] interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // 

