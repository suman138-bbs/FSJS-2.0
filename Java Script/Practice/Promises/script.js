

// function f1()
// {
//     return fetch('https://www.google.com')
// }

// const pro = f1()

// pro.then((data) => {
//     console.log('Success',data)
// }).catch(() => {
//     console.log('Failed')
// })


// const f1 = () => {
    
// }



fetch('https://api.chucknorris.io/jokes/random').then((response) => {
    
   return response.json();
}).then((data) => {
    var joke  = data.value
    console.log(joke)
})
.catch()