// let ob1 = {
//     a:'suman'
// }
// let ob2 = {
//     b:1
// }
// let ob3 = {
//     c:1
// }
// let ob4 = {
//     d:1
// }


// ob4.__proto__=ob1;
// console.log(ob4.a);
// let f1 = () => {
    
// }


// bt1.onclick = () => {
//     console.log("clicked")
//     let h1 = document.createElement("h1")
//     h1.innerText = "Wow This is Really Amazing";
//     document.body.appendChild("h1")
// }



// Create Element using Dom

let bt1 = document.querySelector("button")
console.log(bt1)

bt1.addEventListener('click', () => {
    let ele = document.createElement('h1')
    ele.innerText='wow this is amazing'
    document.body.appendChild(ele)
})

