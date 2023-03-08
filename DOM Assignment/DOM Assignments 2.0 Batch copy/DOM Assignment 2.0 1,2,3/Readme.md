# First Assignment

**First Task**

```
let lis = document.createElement("li")
lis.innerHTML = "<a >Hire Me</a>";
let li1 = document.querySelector("ul")
li1.appendChild(lis);
```

**Second Task**

```
let pla = document.querySelector(".search-field input").placeholder="Search My Project";
```

**Third Task**

```
let spa = document.querySelectorAll(".hero-left-section span")[2]
spa.innerText="an Employee"
let spa1 = document.querySelectorAll(".hero-left-section span")[3]
spa1.innerText="iNeuron intelligence Pvt Ltd"
```

**Fourth Task**

```
let im = document.querySelector('.hero-right-section img').src='person-image.jpg'
```

**Fifth Task**

```
let bt1 = document.querySelector(".hero-right-section-btns");
let bt2 = document.createElement('button');
bt2.innerText = 'Support Me';

bt1.appendChild(bt2);
```

![Output Image](<./Screenshot%20(208).png>)

# Second Assignment

**First Task**

```
let di = document.createElement('div')
di.classList.add('accordian')

let h1 = document.createElement('h3')
h1.innerText = 'Skills';

di.appendChild(h1)
let p1 = document.createElement('p')
p1.innerText='I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github'
di.appendChild(p1)
let di2 = document.querySelector('.accordian-wrapper')
console.log(di2)
di2.appendChild(di)
```

**Second Task**

```
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


let bac = document.querySelectorAll('.accordian h3')

for (let i = 0; i < bac.length;i++)
{
  bac[i].style.backgroundColor = '#bbb7c5'
}

```

![Output Image](<./Screenshot%20(209).png>)

# Third Assignment

```
let pl = document.querySelectorAll(".mainRight form input")
pl[0].placeholder = "FSJs2.0"
pl[1].placeholder = "fsjs@ineuron.ai"


let te1 = document.querySelector('.userMessage')
te1.placeholder = 'Hello World'



let pl1 = document.querySelectorAll(".mainLeft form input")
pl1[0].placeholder = "FSJs2.0"
pl1[1].placeholder = "fsjs@ineuron.ai"


let te2 = document.querySelector('.enterMessage')
te2.placeholder='Hello World'

```

![Output Image](<./Screenshot%20(210).png>)
