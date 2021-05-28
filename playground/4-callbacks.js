// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ["Joseph", "Ross", "Jordan"]
// const shortNames = names.filter((name) =>{
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('New York', (data)=>{
//     console.log(data)
// })

/**
 * Goal: Mess around with the callback pattern
 * 1. Define an add function that accepts the correct arguments
 * 2. Use setTimeout to simulate a 2 seond delay
 * 3. After 2 seconds are up, callback function with the sum
 * 4. Test your work!
 */

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // should print: 5
})