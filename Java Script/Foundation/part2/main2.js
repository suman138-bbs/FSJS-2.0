/**
 * 
 * Fetch Api
 */

// const mypromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       reject("Succes")
//     },3000)
// }
// ).then(msg => {
//     console.log(msg)
// }).catch((err) => {
//     console.log(err)
// })


const myData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const mainData = await data.json()
    console.log(mainData)
}

myData()
console.log("Suman")