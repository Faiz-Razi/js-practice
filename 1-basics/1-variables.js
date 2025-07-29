const accountId = 123 // concrete
let accountEmail = 'faiz@gmail.com'
var accountPassword = '123' // BC var mat use kar cuz of block & functional scope 
accountCity = 'Riyadh' // kar saktay hain par recommended nai 
let accountState; // undefined

accountEmail = 'fahad@gmail.com'
accountPassword = '456'
accountCity = 'Jeddah'


console.table([accountId, accountEmail, accountId, accountPassword, accountCity, accountState])