let nlist = document.querySelectorAll('.main__languages a')
console.log(nlist);

for (let i = 1; i < nlist.length; i = i + 2)
{
    nlist[i].remove()
    }

