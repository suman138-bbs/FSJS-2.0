let h1 = document.querySelector('header img');
h1.src = './assets/ineuron-logo.png'
// console.log(h1);


let pri = document.querySelector('.app_price span')
pri.innerText = '10'


// <i class="fa fa-linkedin" aria-hidden="true"></i>

let li1 = document.querySelector('.footer_social')
// console.log(li1)
let di = document.createElement('div')
di.classList.add('footer_social_ico');
di.innerHTML = '<i class="fa-brands fa-linkedin"></i>'
li1.appendChild(di)
console.log(di)