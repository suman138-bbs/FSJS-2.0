


// var a = 10;
// function f1() {
//     console.log("Namste JavaScript")
// }


// f1()




// var f2 = () => {
//     console.log("Hello JS")
// }
// console.log(f2)


// let arr = ['1','2','3']

// 
console.log("Fetching Data")

let a = fetch('https://api.chucknorris.io/jokes/random')
    .then(res => {
        return res.json()
    }).then((data) => {
        console.log(data.value)
    })

console.log(a.then(resp => {
        return resp.json()
    }).then())