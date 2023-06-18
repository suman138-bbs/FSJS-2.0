/**
 * TYPES
 * Numbers
 * String
 * bool
 * null
 * undefined ===> Variable not yet defined is undefined,nothing is defined
 * object ===>Set of properties
 * Symbol
 */
///// Expression is something that produces a value
// var $ = 23
// console.log($)

/*
fun(parameter){

}

fun(arguments)
*/

/**
 * Array
 */

// var list = ["tiger", "cat", "bear", "bird"]
// list.shift()
// console.log(list)


// var list1 = list.concat("man", "women") ///Concat create a new array
// console.log(list1)


// var a = "Suman Bhandari"
// function f1() {
//     a= "bhandari"
// }
// console.log(a) //Before calling function it prints "Suman Bhandari".
// f1()
// console.log(a) //After calling it update the value of a  which is "bhandari"


//Because of babel every browser can understand the new feature of JavaScript means babel is transpiler which converted our latest code(Es6) to the older version of  code

/* 
let size = 100
var a = true

if (size > 90) {
    var a = false
    console.log("inside",a)
}

console.log("Outside",a)

// Declaring a variable using var keyword have a same scope
*/

/*
let size = 100
let a = true

if (size > 90) {
    let a = false
    console.log("inside",a)
}

console.log("Outside", a)


// Declaring a variable using let keyword have a different scope

*/

/*
const fun = function () {
    console.log("Declare using const")
}

// Declaring a variable using const keyword that means something that it will never going to change  in future suppose function 

*/

/*
// ======>Destructuring
const ob = {
    name: "Suman Bhandari",
    age: "23",
    stack:"MERN"
    
}


// const name = ob.name;
// console.log(name)

const { name } = ob;
console.log(name);
*/

/**  New way of writing Object
 const val = "name"
const val2 = "age"

const ob = {
    [val]: "Suman Bhandari",
    [val2]:23
    
}
console.log(ob)
 */

/*
// ===>if object have same properties and value ,we can write
const name = "Suman"
const val = true
const ob = {
    name:name,
    val
}

console.log(ob)
*/


// // =====> Symbol even thought they have same properties but it will be the different

// let a = Symbol()
// let b = Symbol("foo")
// let c = Symbol("foo")

// console.log(b==c)

/*
function add(a, b) {
    return a + b;
}

const add1 = (a, b) => a + b;
//This is the function expression and other beauti is we dont need to write return over here
    


console.log(add(4, 5))
console.log(add1(4, 5))
*/

