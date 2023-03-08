let bo = document.querySelector('body')

bo.addEventListener('click', (e) => {
    console.log('Hello')
    let di = document.createElement('div')
    di.style.height = '25px'
    di.style.width = '25px'
    di.style.borderRadius = '100%'
    di.style.background = '	#FFFFFF'
    di.style.top = 3000
    di.style.left=200
    // e.clientX =
    // e.clientY = 500;
    e.offsetX=400
    console.log(e)
    bo.appendChild(di)

})