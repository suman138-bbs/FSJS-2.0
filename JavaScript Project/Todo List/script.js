

// TODO Coding
let form = document.querySelector('#new-item-form')

let list = document.querySelector('.list')
let input = document.querySelector('#item-input')




form.addEventListener('submit', (e) => {
    e.preventDefault()
    const item = document.createElement('div')
    item.classList.add('list-item')
    item.innerText = input.value
    list.append(item)
    input.value = ''
    item.addEventListener('click',()=> {
        item.remove()
    })
})

// Change Background
let bt1 = document.querySelector(".chanagebg")
function change() {
    let val = '0123456789ABCDEF'
    let hash = '#';
    for (let i = 0; i < 6; i++){
        hash=hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
    
    
}

console.log(change())

function changeRandomColor() {
    document.body.style.backgroundColor = change();
}
bt1.addEventListener('click',changeRandomColor)

