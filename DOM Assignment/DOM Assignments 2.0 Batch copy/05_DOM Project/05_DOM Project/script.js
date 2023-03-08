let li1 = document.querySelectorAll('.nav-center div')[2]
let a1 = document.createElement('a')

a1.classList.add('btn')
a1.innerText='Pro Subscription'
li1.appendChild(a1)



let d1 = document.querySelector('.recipe-gallery')

let di = document.createElement('div')
di.classList.add('card')


d1.appendChild(di)



let anc = document.querySelector('.tags-container div')
// console.log(anc);
let anc1 = document.createElement('a')
anc1.innerText = 'Chinese (7)'
// console.log(anc1);

anc.appendChild(anc1)