let bt1 = document.querySelector("button")
function change() {
    let val = '0123456789ABCDEF'
    let hash = '#';
    for (let i = 0; i < 6; i++){
        hash=hash + val[Math.floor(Math.random() * 16)];
    }
    return hash;
    
    
}
console.log("hello")
console.log(change())

function changeRandomColor() {
    document.body.style.backgroundColor = change();
}
bt1.addEventListener('click',changeRandomColor)


