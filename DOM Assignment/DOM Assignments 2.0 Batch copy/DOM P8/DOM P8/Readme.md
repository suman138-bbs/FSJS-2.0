# Assignment 08

**TASK-1**

```
let asi = document.querySelector('.col-lg-4')
let head = document.createElement('h2')
let para = document.createElement('p')
head.classList.add('new-head')
para.classList.add('new-p')

head.innerText = 'Chat Gpt';
para.innerText = 'Chat Gpt possible by using the concept of Web 3.0.. '

asi.appendChild(head)
asi.appendChild(para)

asi.style.overflow = "scroll";

**TASK--2**

let bod = document.querySelector('body')
// console.log(bod)
bod.style.backgroundImage = 'none'

**TASK--3**

let cl = document.querySelector('.navbar-toggler')
let di1 = document.querySelector('#navbarTogglerDemo01')

cl.addEventListener('click', () => {
di1.classList.toggle('collapse')

})
```

![Output Image](<./Screenshot%20(214).png>)

![Output Image](<./Screenshot%20(215).png>)
