// First Task

let lis = document.createElement("li")
lis.innerHTML = "<a >Hire Me</a>";
let li1 = document.querySelector("ul")
li1.appendChild(lis);

// Second Task

let pla = document.querySelector(".search-field input").placeholder="Search My Project";


// Third Task

let spa = document.querySelectorAll(".hero-left-section span")[2]
spa.innerText="an Employee"

let spa1 = document.querySelectorAll(".hero-left-section span")[3]
spa1.innerText="iNeuron intelligence Pvt Ltd"


// Fourth Task
let im = document.querySelector('.hero-right-section img').src='person-image.jpg'


// Fifth Task
let bt1 = document.querySelector(".hero-right-section-btns");
let bt2 = document.createElement('button');
bt2.innerText = 'Support Me'

bt1.appendChild(bt2);