// const [first, second] = [2, 3]
//




const spread = {
    name: "suman",
    age: 22,
    address: {
        city: "palpa",
        street:"chhara"
    }
}


const { ...s } = spread
const { name,age } =s
console.log(s)
console.log(spread)
console.log(name,age)


function f1({ name, age })
{
    console.log(name)
}

f1(s)

// console.log(ob.name)
// const { name, age } = ob
// console.log(name)



// const spread = [2, 3, 4, 5, 6]

// function f1(name)
// {
//    console.log(name)
// }

// f1(...spread)


