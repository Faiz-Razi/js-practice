// Date

// let myDate = new Date()

// console.log(typeof myDate) // object

// console.log(myDate) // 2025-08-04T08:45:56.350Z

// console.log(myDate.toString()) // Mon Aug 04 2025 08:47:15 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()) // Mon Aug 04 2025

// console.log(myDate.toISOString()) // 2025-08-04T08:50:30.711Z

// console.log(myDate.toJSON()) // 2025-08-04T08:50:30.711Z

// console.log(myDate.toLocaleDateString()) // 8/4/2025

// console.log(myDate.toLocaleString()) // 8/4/2025, 8:52:29 AM

// console.log(myDate.toLocaleTimeString()) // 8:53:18 AM

// console.log(myDate.toTimeString()) // 08:54:13 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toUTCString()) // Mon, 04 Aug 2025 08:55:03 GMT

// console.log(myDate.getTimezoneOffset()) // 0

// let myDate2 = new Date(2023, 0, 23) 

// console.log(myDate2.toDateString()) // Mon Jan 23 2023

// let myDate3 = new Date(2023, 0, 23, 5, 3) 

// console.log(myDate3.toLocaleString()) // 1/23/2023, 5:03:00 AM

// let myDate4 = new Date('2023-01-23') 

// console.log(myDate4.toLocaleString()) // 1/23/2023, 5:03:00 AM

// let myTimeStamp = Date.now()

// console.log(Math.floor(myTimeStamp/1000))

let myDate5 = new Date()

console.log(myDate5.getMonth()) // 7

console.log(myDate5.getDay()) // 1

myDate5.toLocaleString('default', {

    weekday: 'long',

    timeZone: ''

})