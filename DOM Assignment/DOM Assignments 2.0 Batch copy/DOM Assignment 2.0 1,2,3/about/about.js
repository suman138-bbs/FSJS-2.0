


// Appened Skills part

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

