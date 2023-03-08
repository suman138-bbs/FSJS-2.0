// 

let h1 = document.querySelector('.caption .title')
h1.style.color = '#dc143c'
h1.style.fontWeight='lighter'

let bt1 = document.querySelector(".add-to-cart")

bt1.addEventListener('mouseenter', () => bt1.style.backgroundColor = '#dc143c')

let bt2 = document.querySelector(".add-to-cart")
bt2.addEventListener('mouseleave',()=>bt2.style.backgroundColor ='#3c8067'
)